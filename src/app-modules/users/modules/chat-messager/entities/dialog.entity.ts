import { Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../../core/comm-utils/database/base.b.entityb';
import { ChatMessage } from './chat-message.entity';
import { DialogMember } from './dialog-member.entity';

@Entity({ name: 'dialogs' })
export class Dialog extends BaseEntity<Dialog> {
  @OneToMany(() => DialogMember, member => member.dialog)
  members: DialogMember[];

  @OneToMany(() => ChatMessage, message => message.dialog)
  messages: ChatMessage[];
}
