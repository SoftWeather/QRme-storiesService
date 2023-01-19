import { User } from '../users/user.entity';
import { RelevanceBetweenUsers } from './relevance-between-users.entity';

export class RelevanceBetweenUsersMapper {
  static mapToEntity(
    userFrom: User,
    userTo: User,
    creator?: string,
    frequencyOfReactions?: number,
    frequencyOfLikes?: number,
    frequencyOfStoriesViews?: number,
    frequencyOfSentMessages?: number,
    arithmeticMeanFrequency?: number,
  ): RelevanceBetweenUsers {
    return new RelevanceBetweenUsers(
      creator,
      userFrom,
      userTo,
      frequencyOfReactions,
      frequencyOfLikes,
      frequencyOfStoriesViews,
      frequencyOfSentMessages,
      arithmeticMeanFrequency,
    );
  }
}
