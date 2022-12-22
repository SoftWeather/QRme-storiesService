import { NestjsRepository } from '../../../core/nestjs/nestjs.repository';
import { usersImportingCommonModules } from './imports.metadata';
import usersProviders from './providers.metadata';

type Export = NestjsRepository.Export;
const usersExportingModules: Export[] = [
  ...usersProviders,
  ...usersImportingCommonModules,
];

export default usersExportingModules;
