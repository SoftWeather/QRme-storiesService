import { NestjsRepository } from '../../../../../core/nestjs/nestjs.repository';
import chatMessagerProviders from './providers.metadata';

type Export = NestjsRepository.Export;

const chatMessagerExports: Export[] = [...chatMessagerProviders];

export default chatMessagerExports;
