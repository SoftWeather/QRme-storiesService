import { Entity, ManyToOne, RelationId } from 'typeorm';
import { BaseEntity } from '../../../../../core/comm-utils/database/base.b.entityb';
import { User } from '../../../user.entity';
import { Dialog } from './dialog.entity';

@Entity({ name: 'dialog_members' })
export class DialogMember extends BaseEntity<DialogMember> {
  @ManyToOne(() => User)
  user: User;

  @RelationId((member: DialogMember) => member.user)
  userId: string;

  @ManyToOne(() => Dialog, user => user.members)
  dialog: Dialog;
}
