import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { BaseEntityRepository } from './base-entity.repository';

export abstract class BaseEntity<T> {
  get _baseDetails(): Omit<
    T,
    BaseEntityRepository.constructorProperties | '_baseDetails'
  > {
    const keys = Object.keys(this).filter(
      key => !key.match(BaseEntityRepository.constructorPropertiesRegExp),
    );

    const details = {};

    for (const key of keys) {
      details[key] = this[key];
    }

    return details as Omit<
      T,
      BaseEntityRepository.constructorProperties | '_baseDetails'
    >;
  }

  constructor(
    private readonly _createdBy: string,
    private readonly _lastChangedBy: string,
    private readonly _internalComment: string = null,
    private readonly _isActive?: boolean,
    private readonly _isArchive?: boolean,
  ) {
    this.createdBy = this._createdBy;
    this.lastChangedBy = this._lastChangedBy;
    this.internalComment = this._internalComment;
    this.isActive = this._isActive;
    this.isArchived = this._isArchive;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'boolean', default: false })
  isArchived: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @Column({ type: 'varchar', length: 300 })
  createdBy: string;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime: Date;

  @Column({ type: 'varchar', length: 300 })
  lastChangedBy: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  internalComment: string | null;
}
