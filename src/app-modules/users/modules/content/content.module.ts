import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import contentMetadata from './metadata/module.metadata';

@Module(contentMetadata)
export class ContentModule {}
