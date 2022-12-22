import { ModuleMetadata } from '@nestjs/common';
import contentExports from './exports.metadata';
import contentImports from './imports.metadata';

const contentMetadata: ModuleMetadata = {
  imports: contentImports,
  exports: contentExports,
};

export default contentMetadata;
