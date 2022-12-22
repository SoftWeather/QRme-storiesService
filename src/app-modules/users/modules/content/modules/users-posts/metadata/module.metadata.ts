import { ModuleMetadata } from '@nestjs/common';
import usersPostsExports from './exports.metadata';
import usersPostsImports from './imports.metadata';

const usersPostsModuleMetadata: ModuleMetadata = {
  imports: usersPostsImports,
  exports: usersPostsExports,
};

export default usersPostsModuleMetadata;
