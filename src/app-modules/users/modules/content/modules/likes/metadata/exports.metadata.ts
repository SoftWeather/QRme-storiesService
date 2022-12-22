import { NestjsRepository } from '../../../../../../../core/nestjs/nestjs.repository';
import likesProviders from './providers.metadata';

type Export = NestjsRepository.Export;

const likesExports: Export[] = [...likesProviders];

export default likesExports;
