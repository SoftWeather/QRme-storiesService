import { NestjsRepository } from '../../../../../core/nestjs/nestjs.repository';
import { UsersPostsModule } from '../modules/users-posts/users-posts.module';
import { ReactionsModule } from '../modules/reactions/reactions.module';
import { LikesModule } from '../modules/likes/likes.module';

type Import = NestjsRepository.Import;

export const contentImportingCommonModules: Import[] = [
  ReactionsModule,
  UsersPostsModule,
  LikesModule,
];
const contentImports: Import[] = [...contentImportingCommonModules];

export default contentImports;
