import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Between,
  FindManyOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { LoggerCreator } from '../../../../../../../../core/comm-utils/logging/logger-creator';
import { PostView } from './post-view.entitiy';

@Injectable()
export class PostsViewsService {
  constructor(
    @InjectRepository(PostView)
    private readonly _postsViewsRepository: Repository<PostView>,
  ) {}

  async getPostsViewsCountByIntervalAndUserFromIdAndUserToId(
    userFromId: string,
    userToId: string,
    interval?: number,
  ): Promise<number> {
    const conditionCreateDateTime: FindOptionsWhere<PostView> = {};

    if (interval && typeof interval !== 'number') return undefined;

    if (interval) {
      const dateNow: Date = new Date();
      dateNow.setDate(dateNow.getDate() + 1);
      const dateFrom: Date = new Date(Date.now() - interval);

      conditionCreateDateTime.createDateTime = Between(dateFrom, dateNow);
    }

    const condition: FindOptionsWhere<PostView> | FindOptionsWhere<PostView>[] =
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

    const where: FindOptionsWhere<PostView> | FindOptionsWhere<PostView>[] =
      Object.assign(condition, conditionCreateDateTime);

    const queryOptions: FindManyOptions<PostView> = {
      where,
    };

    try {
      const count: number = await this._postsViewsRepository.count(
        queryOptions,
      );

      return count;
    } catch (error) {
      LoggerCreator.error(
        PostsViewsService.name,
        this.getPostsViewsCountByIntervalAndUserFromIdAndUserToId.name,
        error,
      );

      return undefined;
    }
  }
}
