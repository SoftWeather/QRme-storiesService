import { Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../../../core/comm-utils/database/base.b.entityb';
import { User } from '../../../../user.entity';
import { UserPost } from '../users-posts/user-post.entity';

@Entity({ name: 'likes', synchronize: false })
export class UserLike extends BaseEntity<UserLike> {
  @ManyToOne(() => User, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  user: User;

  @ManyToOne(() => UserPost, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  post: UserPost;
}
