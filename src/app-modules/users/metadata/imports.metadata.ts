import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsRepository } from '../../../core/nestjs/nestjs.repository';
import { ChatMessagerModule } from '../modules/chat-messager/chat-messager.module';
import { ContentModule } from '../modules/content/content.module';
import { User } from '../user.entity';

type Import = NestjsRepository.Import;

const entities = [User];
const importingConfigModules: Import[] = [TypeOrmModule.forFeature(entities)];
export const usersImportingCommonModules: Import[] = [
  ContentModule,
  ChatMessagerModule,
];

const usersImports: Import[] = [
  ...importingConfigModules,
  ...usersImportingCommonModules,
];

export default usersImports;
