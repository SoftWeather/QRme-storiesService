import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Between,
  FindManyOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { LoggerCreator } from '../../../../../../core/comm-utils/logging/logger-creator';
import { UserLike } from './user-like.entity';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(UserLike)
    private readonly _likesRepository: Repository<UserLike>,
  ) {}

  async getLikesCountByIntervalAndUserFromIdAndUserToId(
    userFromId: string,
    userToId: string,
    interval?: number,
  ): Promise<number> {
    const conditionCreateDateTime: FindOptionsWhere<UserLike> = {};

    if (interval && typeof interval !== 'number') return undefined;

    if (interval) {
      const dateNow: Date = new Date();
      dateNow.setDate(dateNow.getDate() + 1);
      const dateFrom: Date = new Date(Date.now() - interval);

      conditionCreateDateTime.createDateTime = Between(dateFrom, dateNow);
    }

    const condition: FindOptionsWhere<UserLike> | FindOptionsWhere<UserLike>[] =
      {
        user: {
          id: userFromId,
        },
        post: {
          author: {
            id: userToId,
          },
        },
      };

    const where = Object.assign(condition, conditionCreateDateTime);

    const queryOptions: FindManyOptions<UserLike> = {
      where,
    };

    try {
      const count: number = await this._likesRepository.count(queryOptions);

      return count;
    } catch (error) {
      LoggerCreator.error(
        LikesService.name,
        this.getLikesCountByIntervalAndUserFromIdAndUserToId.name,
        error,
      );

      return undefined;
    }
  }
}
