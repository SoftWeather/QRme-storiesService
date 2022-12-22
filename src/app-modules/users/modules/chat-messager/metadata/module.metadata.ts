import { ModuleMetadata } from '@nestjs/common';
import chatMessagerExports from './exports.metadata';
import chatMessagerImports from './imports.metadata';
import chatMessagerProviders from './providers.metadata';

const chatMessagerModuleMetadata: ModuleMetadata = {
  imports: chatMessagerImports,
  providers: chatMessagerProviders,
  exports: chatMessagerExports,
};

export default chatMessagerModuleMetadata;
