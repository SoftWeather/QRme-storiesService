import { Module } from '@nestjs/common';
import chatMessagerModuleMetadata from './metadata/module.metadata';

@Module(chatMessagerModuleMetadata)
export class ChatMessagerModule {}
