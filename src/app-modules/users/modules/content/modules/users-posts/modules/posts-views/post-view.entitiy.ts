import { Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../../../../../core/comm-utils/database/base.b.entityb';
import { User } from '../../../../../../user.entity';
import { UserPost } from '../../user-post.entity';

@Entity({ name: 'post_views', synchronize: false })
export class PostView extends BaseEntity<PostView> {
  @ManyToOne(() => User, { cascade: ['remove'], onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => UserPost, { cascade: ['remove'], onDelete: 'CASCADE' })
  post: UserPost;
}
