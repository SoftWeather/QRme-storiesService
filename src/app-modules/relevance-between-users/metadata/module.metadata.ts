import { ModuleMetadata } from '@nestjs/common';
import relevanceBetweenUsersProviders from './providers.metadata';
import relevanceBetweenUsersImports from './imports.metadata';

const relevanceBetweenUsersMetadata: ModuleMetadata = {
  imports: relevanceBetweenUsersImports,
  providers: relevanceBetweenUsersProviders,
};

export default relevanceBetweenUsersMetadata;
