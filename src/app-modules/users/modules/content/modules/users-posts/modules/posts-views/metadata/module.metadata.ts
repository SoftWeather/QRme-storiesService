import { ModuleMetadata } from '@nestjs/common';
import postsViewsExports from './exports.metadata';
import postsViewsImports from './imports.metadata';
import postsViewsProviders from './providers.metadata';

const postsViewsModuleMetadata: ModuleMetadata = {
  imports: postsViewsImports,
  providers: postsViewsProviders,
  exports: postsViewsExports,
};

export default postsViewsModuleMetadata;
