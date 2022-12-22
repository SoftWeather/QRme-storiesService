import { NestjsRepository } from '../../../../../../../../../core/nestjs/nestjs.repository';
import postsViewsProviders from './providers.metadata';

type Export = NestjsRepository.Export;

const postsViewsExports: Export[] = [...postsViewsProviders];

export default postsViewsExports;
