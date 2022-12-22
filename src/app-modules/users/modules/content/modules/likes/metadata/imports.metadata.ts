import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsRepository } from '../../../../../../../core/nestjs/nestjs.repository';
import { UserLike } from '../user-like.entity';

type Import = NestjsRepository.Import;

const entities = [UserLike];
const importingConfigModules: Import[] = [TypeOrmModule.forFeature(entities)];
const likesImports: Import[] = [...importingConfigModules];

export default likesImports;
