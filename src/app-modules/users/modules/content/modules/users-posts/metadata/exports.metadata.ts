import { NestjsRepository } from '../../../../../../../core/nestjs/nestjs.repository';
import { usersPostsImportingCommonModules } from './imports.metadata';

type Export = NestjsRepository.Export;

const usersPostsExports: Export[] = [...usersPostsImportingCommonModules];

export default usersPostsExports;
