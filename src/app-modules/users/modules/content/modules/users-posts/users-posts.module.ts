import { Module } from '@nestjs/common';
import usersPostsModuleMetadata from './metadata/module.metadata';

@Module(usersPostsModuleMetadata)
export class UsersPostsModule {}
