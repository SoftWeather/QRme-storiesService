import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelevanceBetweenUsersModule } from './app-modules/relevance-between-users/relevance-between-users.module';
import { UsersModule } from './app-modules/users/users.module';
import bullConfig from './core/bull/bull.config';
import { NestjsRepository } from './core/nestjs/nestjs.repository';
import { postgresOptions } from './core/type-orm/postgres/postgres.config';

type Import = NestjsRepository.Import;

const importingConfigModules: Import[] = [
  ConfigModule.forRoot(),
  TypeOrmModule.forRoot(postgresOptions),
  BullModule.forRoot(bullConfig),
];

const importingCommonModules: Import[] = [
  UsersModule,
  RelevanceBetweenUsersModule,
];

const imports: Import[] = [
  ...importingConfigModules,
  ...importingCommonModules,
];

@Module({
  imports,
})
export class AppModule {}
