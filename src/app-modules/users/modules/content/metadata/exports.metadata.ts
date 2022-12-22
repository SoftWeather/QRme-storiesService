import { NestjsRepository } from '../../../../../core/nestjs/nestjs.repository';
import { contentImportingCommonModules } from './imports.metadata';

type Export = NestjsRepository.Export;

const contentExports: Export[] = [...contentImportingCommonModules];

export default contentExports;
