import { Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../../core/comm-utils/database/base.b.entityb';
import { User } from '../../../user.entity';
import { Dialog } from './dialog.entity';

@Entity({ name: 'chat_messages', synchronize: false })
export class ChatMessage extends BaseEntity<ChatMessage> {
  // isActive - отправки сообщения с медиафайлами
  // true - отправлено
  // false - не отправлено

  @ManyToOne(() => User)
  user_from: User;

  @ManyToOne(() => Dialog, dialog => dialog.messages)
  dialog: Dialog;
}
