import { DatabaseType } from 'typeorm';

export namespace TypeOrmRepository {
  export const typeValues: DatabaseType[] = [
    'better-sqlite3',
    'capacitor',
    'cockroachdb',
    'cordova',
    'expo',
    'mariadb',
    'mongodb',
    'mssql',
    'mysql',
    'nativescript',
    'oracle',
    'postgres',
    'react-native',
    'sap',
    'sqlite',
    'sqljs',
  ];
}
