import { Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../../../core/comm-utils/database/base.b.entityb';
import { User } from '../../../../user.entity';

@Entity({ name: 'user_post', synchronize: false })
export class UserPost extends BaseEntity<UserPost> {
  @ManyToOne(() => User, { cascade: ['remove'], onDelete: 'CASCADE' })
  author: User;
}
