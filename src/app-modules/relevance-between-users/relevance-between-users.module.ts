import { Module } from '@nestjs/common';
import relevanceBetweenUsersMetadata from './metadata/module.metadata';

@Module(relevanceBetweenUsersMetadata)
export class RelevanceBetweenUsersModule {}
