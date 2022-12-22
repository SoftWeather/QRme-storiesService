import { ModuleMetadata } from '@nestjs/common';
import reactionsExports from './exports.metadata';
import reactionsImports from './imports.metadata';
import reactionsProviders from './providers.metadata';

const reactionsModuleMetadata: ModuleMetadata = {
  imports: reactionsImports,
  providers: reactionsProviders,
  exports: reactionsExports,
};

export default reactionsModuleMetadata;
