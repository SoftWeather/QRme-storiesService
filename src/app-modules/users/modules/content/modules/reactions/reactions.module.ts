import { Module } from '@nestjs/common';
import reactionsModuleMetadata from './metadata/module.metadata';

@Module(reactionsModuleMetadata)
export class ReactionsModule {}
