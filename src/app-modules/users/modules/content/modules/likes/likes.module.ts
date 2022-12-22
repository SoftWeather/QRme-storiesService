import { Module } from '@nestjs/common';
import likesModuleMetadata from './metadata/module.metadata';

@Module(likesModuleMetadata)
export class LikesModule {}
