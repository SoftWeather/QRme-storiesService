import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoggerCreator } from '../../core/comm-utils/logging/logger-creator';
import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';
import { FrequencyService } from './frequency/frequency.service';
import { RelevanceBetweenUsers } from './relevance-between-users.entity';
import { RelevanceBetweenUsersMapper } from './relevance-between-users.mapper';
import { RelevanceBetweenUsersRepository } from './relevance-between-users.repository';

type AllFrequency = RelevanceBetweenUsersRepository.AllFrequency;

@Injectable()
export class RelevanceBetweenUsersService {
  constructor(
    @InjectRepository(RelevanceBetweenUsers)
    private readonly _relevanceBetweenUsersRepository: Repository<RelevanceBetweenUsers>,

    private readonly _usersService: UsersService,
    private readonly _frequencyService: FrequencyService,
  ) {}

  async upsert(
    userFromId: string,
    userToId: string,
    creator?: string,
  ): Promise<void> {
    if (!userFromId || !userToId) return;

    const userFromAndUserTo: [User, User] = await Promise.all([
      this._usersService.findOneActualUserById(userFromId),
      this._usersService.findOneActualUserById(userToId),
    ]);

    const [userFrom, userTo] = userFromAndUserTo;

    if (!userFrom || !userTo) return;

    // Получить значение коэф. релевантности
    const {
      frequencyOfReactions,
      frequencyOfLikes,
      frequencyOfStoriesViews,
      frequencyOfSentMessages,
      arithmeticMeanFrequency,
    }: AllFrequency = await this._frequencyService.getAllFrequency(
      userFromId,
      userToId,
    );

    const relevance = RelevanceBetweenUsersMapper.mapToEntity(
      userFrom,
      userTo,
      creator,
      frequencyOfReactions,
      frequencyOfLikes,
      frequencyOfStoriesViews,
      frequencyOfSentMessages,
      arithmeticMeanFrequency,
    );

    try {
      this._relevanceBetweenUsersRepository.upsert(relevance, {
        conflictPaths: {
          userFrom: true,
          userTo: true,
        },
        skipUpdateIfNoValuesChanged: true,
      });
    } catch (error) {
      LoggerCreator.error(
        RelevanceBetweenUsersService.name,
        this.upsert.name,
        error,
      );
    }
  }
}
