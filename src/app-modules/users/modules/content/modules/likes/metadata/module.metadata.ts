import { ModuleMetadata } from '@nestjs/common';
import likesExports from './exports.metadata';
import likesImports from './imports.metadata';
import likesProviders from './providers.metadata';

const likesModuleMetadata: ModuleMetadata = {
  imports: likesImports,
  providers: likesProviders,
  exports: likesExports,
};

export default likesModuleMetadata;
