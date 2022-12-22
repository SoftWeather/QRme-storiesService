import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseType } from 'typeorm';
import 'dotenv/config';

const type: DatabaseType = 'postgres';
const synchronize: boolean =
  process.env.POSTGRES_SYNCHRONIZE === 'true' ? true : false;

export const postgresOptions: TypeOrmModuleOptions = {
  type,

  host: process.env.POSTGRES_HOST || 'localhost',
  port: +process.env.POSTGRES_PORT || 6432,
  username: process.env.POSTGRES_USERNAME || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgress',
  database: process.env.POSTGRES_DATABASE || 'qrme-back',
  synchronize,
  autoLoadEntities: true,
  ssl: false,
};
