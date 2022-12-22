import { BaseEntity } from 'src/core/comm-utils/database/base.b.entityb';
import { User } from 'src/app-modules/users/user.entity';
import { Entity, ManyToOne } from 'typeorm';
import { UserPost } from '../users-posts/user-post.entity';

@Entity({ name: 'reactions', synchronize: false })
export class Reaction extends BaseEntity<Reaction> {
  @ManyToOne(() => UserPost, {
    onDelete: 'CASCADE',
    cascade: ['remove'],
  })
  targetPost: UserPost;

  @ManyToOne(() => User, { onDelete: 'CASCADE', cascade: ['remove'] })
  author: User;
}
