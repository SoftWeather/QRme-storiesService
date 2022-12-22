import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Between,
  FindManyOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { LoggerCreator } from '../../../../../../core/comm-utils/logging/logger-creator';
import { Reaction } from './reaction.entity';

@Injectable()
export class ReactionsService {
  constructor(
    @InjectRepository(Reaction)
    private readonly _reactionsRepository: Repository<Reaction>,
  ) {}

  async getReactionsCountByIntervalAndUserFromIdAndUserToId(
    userFromId: string,
    userToId: string,
    interval?: number,
  ): Promise<number> {
    const conditionCreateDateTime: FindOptionsWhere<Reaction> = {};

    if (interval && typeof interval !== 'number') return undefined;

    if (interval) {
      const dateNow: Date = new Date();
      dateNow.setDate(dateNow.getDate() + 1);
      const dateFrom: Date = new Date(Date.now() - interval);

      conditionCreateDateTime.createDateTime = Between(dateFrom, dateNow);
    }

    const condition: FindOptionsWhere<Reaction> | FindOptionsWhere<Reaction>[] =
      {
        author: {
          id: userFromId,
        },
        targetPost: {
          author: {
            id: userToId,
          },
        },
      };

    const where = Object.assign(condition, conditionCreateDateTime);

    const queryOptions: FindManyOptions<Reaction> = {
      where,
    };

    try {
      const count: number = await this._reactionsRepository.count(queryOptions);

      return count;
    } catch (error) {
      LoggerCreator.error(
        ReactionsService.name,
        this.getReactionsCountByIntervalAndUserFromIdAndUserToId.name,
        error,
      );

      return undefined;
    }
  }
}
