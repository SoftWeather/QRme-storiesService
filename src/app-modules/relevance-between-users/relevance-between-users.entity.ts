import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../core/comm-utils/database/base.b.entityb';
import { User } from '../users/user.entity';

@Entity({
  name: 'relevance_between_users',
})
@Index(
  'relevance_between_users-user_from_id-user_to_id-btree-idx',
  ['userFrom', 'userTo'],
  {
    unique: true,
  },
)
export class RelevanceBetweenUsers extends BaseEntity<RelevanceBetweenUsers> {
  constructor(
    private readonly _creator = 'system',
    private readonly _userFrom: User,
    private readonly _userTo: User,
    private readonly _frequencyOfReactions: number,
    private readonly _frequencyOfLikes: number,
    private readonly _frequencyOfStoriesViews: number,
    private readonly _frequencyOfSentMessages: number,
  ) {
    super(_creator, _creator);

    this.frequencyOfLikes = _frequencyOfLikes;
    this.frequencyOfReactions = _frequencyOfReactions;
    this.frequencyOfSentMessages = _frequencyOfSentMessages;
    this.frequencyOfStoriesViews = _frequencyOfStoriesViews;
    this.userFrom = _userFrom;
    this.userTo = _userTo;
  }

  @Column({ nullable: false, default: 0 })
  frequencyOfReactions: number;

  @Column({ nullable: false, default: 0 })
  frequencyOfLikes: number;

  @Column({ nullable: false, default: 0 })
  frequencyOfStoriesViews: number;

  @Column({ nullable: false, default: 0 })
  frequencyOfSentMessages: number;

  @ManyToOne(() => User, {
    nullable: false,
    cascade: ['remove'],
    onDelete: 'CASCADE',
  })
  @Index('relevance_between_users-user_from_id-btree-idx')
  userFrom: User;

  @ManyToOne(() => User, {
    nullable: false,
    cascade: ['remove'],
    onDelete: 'CASCADE',
  })
  @Index('relevance_between_users-user_to_id-btree-idx')
  userTo: User;
}
