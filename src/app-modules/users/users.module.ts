import { Module } from '@nestjs/common';
import usersMetadata from './metadata/module.metadata';

@Module(usersMetadata)
export class UsersModule {}
