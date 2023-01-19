import { Injectable } from '@nestjs/common';
import { ChatMessagerService } from '../../users/modules/chat-messager/chat-messager.service';
import { LikesService } from '../../users/modules/content/modules/likes/likes.service';
import { ReactionsService } from '../../users/modules/content/modules/reactions/reactions.service';
import { PostsViewsService } from '../../users/modules/content/modules/users-posts/modules/posts-views/posts-views.service';
import { RelevanceBetweenUsersRepository } from '../relevance-between-users.repository';

type AllFrequency = RelevanceBetweenUsersRepository.AllFrequency;

@Injectable()
export class FrequencyService {
  constructor(
    private readonly _rectionsService: ReactionsService,
    private readonly _likesService: LikesService,
    private readonly _postsViewsService: PostsViewsService,
    private readonly _chatMessagerService: ChatMessagerService,
  ) {}

  private async _getFrequencyOfReactions(
    userFromId: string,
    userToId: string,
  ): Promise<number> {
    const interval = +process.env.INTERVAL_FOR_FREQUENCY_OF_REACTIONS_MS;

    const frequency: number =
      await this._rectionsService.getReactionsCountByIntervalAndUserFromIdAndUserToId(
        userFromId,
        userToId,
        interval,
      );

    return frequency;
  }

  private async _getFrequencyOfLikes(
    userFromId: string,
    userToId: string,
  ): Promise<number> {
    const interval = +process.env.INTERVAL_FOR_FREQUENCY_OF_LIKES;

    const frequency: number =
      await this._likesService.getLikesCountByIntervalAndUserFromIdAndUserToId(
        userFromId,
        userToId,
        interval,
      );

    return frequency;
  }

  private async _getFrequencyOfStoriesViews(
    userFromId: string,
    userToId: string,
  ): Promise<number> {
    const interval = +process.env.INTERVAL_FOR_FREQUENCY_OF_STORIES_VIEWS;

    const frequency: number =
      await this._postsViewsService.getPostsViewsCountByIntervalAndUserFromIdAndUserToId(
        userFromId,
        userToId,
        interval,
      );

    return frequency;
  }

  private async _getFrequencyOfSentMessages(
    userFromId: string,
    userToId: string,
  ): Promise<number> {
    const interval = +process.env.INTERVAL_FOR_FREQUENCY_OF_SENT_MESSAGES;

    const frequency: number =
      await this._chatMessagerService.getChatMessagesCountByIntervalAndUserFromIdAndUserToId(
        userFromId,
        userToId,
        interval,
      );

    return frequency;
  }

  async getAllFrequency(
    userFromId: string,
    userToId: string,
  ): Promise<AllFrequency> {
    const allFrequency: AllFrequency = {
      frequencyOfReactions: undefined,
      frequencyOfLikes: undefined,
      frequencyOfStoriesViews: undefined,
      frequencyOfSentMessages: undefined,
      arithmeticMeanFrequency: undefined,
    };

    [
      allFrequency.frequencyOfReactions,
      allFrequency.frequencyOfLikes,
      allFrequency.frequencyOfStoriesViews,
      allFrequency.frequencyOfSentMessages,
    ] = await Promise.all([
      this._getFrequencyOfReactions(userFromId, userToId),
      this._getFrequencyOfLikes(userFromId, userToId),
      this._getFrequencyOfStoriesViews(userFromId, userToId),
      this._getFrequencyOfSentMessages(userFromId, userToId),
    ]);

    allFrequency.arithmeticMeanFrequency =
      (allFrequency.frequencyOfReactions +
        allFrequency.frequencyOfLikes +
        allFrequency.frequencyOfStoriesViews +
        allFrequency.frequencyOfSentMessages) /
      4;

    return allFrequency;
  }
}
