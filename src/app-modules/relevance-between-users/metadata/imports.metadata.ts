import { BullModule } from '@nestjs/bull';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullRepository } from '../../../core/bull/bull.repository';
import { NestjsRepository } from '../../../core/nestjs/nestjs.repository';
import { UsersModule } from '../../users/users.module';
import { RelevanceBetweenUsers } from '../relevance-between-users.entity';

type Import = NestjsRepository.Import;

const entities = [RelevanceBetweenUsers];

const importingConfigModules: Import[] = [
  TypeOrmModule.forFeature(entities),
  BullModule.registerQueue(...BullRepository.registerQueues),
];

const importingCommonModules: Import[] = [UsersModule];

const relevanceBetweenUsersImports: Import[] = [
  ...importingConfigModules,
  ...importingCommonModules,
];

export default relevanceBetweenUsersImports;
