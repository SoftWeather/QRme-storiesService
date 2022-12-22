import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsRepository } from '../../../../../../../core/nestjs/nestjs.repository';
import { PostsViewsModule } from '../modules/posts-views/posts-views.module';
import { UserPost } from '../user-post.entity';

type Import = NestjsRepository.Import;

const entities = [UserPost];
const importingConfigModules: Import[] = [TypeOrmModule.forFeature(entities)];
export const usersPostsImportingCommonModules: Import[] = [PostsViewsModule];

const usersPostsImports: Import[] = [
  ...importingConfigModules,
  ...usersPostsImportingCommonModules,
];

export default usersPostsImports;
