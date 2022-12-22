import { Module } from '@nestjs/common';
import postsViewsModuleMetadata from './metadata/module.metadata';

@Module(postsViewsModuleMetadata)
export class PostsViewsModule {}
