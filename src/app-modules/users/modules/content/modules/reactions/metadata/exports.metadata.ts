import { NestjsRepository } from '../../../../../../../core/nestjs/nestjs.repository';
import reactionsProviders from './providers.metadata';

type Export = NestjsRepository.Export;

const reactionsExports: Export[] = [...reactionsProviders];

export default reactionsExports;
