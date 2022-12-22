import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsRepository } from '../../../../../../../../../core/nestjs/nestjs.repository';
import { PostView } from '../post-view.entitiy';

type Import = NestjsRepository.Import;

const entities = [PostView];
const importingConfigModules: Import[] = [TypeOrmModule.forFeature(entities)];
const postsViewsImports: Import[] = [...importingConfigModules];

export default postsViewsImports;
