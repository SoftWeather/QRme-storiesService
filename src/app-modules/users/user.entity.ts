import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../core/comm-utils/database/base.b.entityb';

@Entity({ name: 'users', synchronize: false })
export class User extends BaseEntity<User> {
  constructor(
    private readonly _creater: string,
    private readonly __internalComment: string = undefined,
  ) {
    super(_creater, _creater, __internalComment);
  }

  // isActive - статус блокировки аккаунта
  // true - заблокирован
  // false - не заблокирован

  // isArchived - статус предварительного удаления пользователя
  // true - предварительно удалён
  // false - аккаунт активен

  // internalComment - Account Id сервиса авторизации
  // null - локальная авторизация

  @Column({ type: 'varchar', length: 30 })
  password: string;

  @Column({ type: 'varchar', length: 30, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  token: string;

  @Column({ type: 'boolean', default: false })
  isPrivat: boolean;

  @Column({ type: 'boolean', default: true })
  isIntent: boolean;

  @Column({ type: 'boolean', default: false })
  isFollowing: boolean;

  @Column({
    nullable: true,
    comment: 'Хранит дату мягкого удаления пользователя',
  })
  softDeleteDateTime: Date;
}
