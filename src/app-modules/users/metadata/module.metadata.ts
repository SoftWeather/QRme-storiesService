import { ModuleMetadata } from '@nestjs/common';
import usersProviders from './providers.metadata';
import usersExportingModules from './exports.metadat';
import usersImports from './imports.metadata';

const usersMetadata: ModuleMetadata = {
  imports: usersImports,
  providers: usersProviders,
  exports: usersExportingModules,
};

export default usersMetadata;
