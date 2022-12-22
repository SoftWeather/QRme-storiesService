import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsRepository } from '../../../../../../../core/nestjs/nestjs.repository';
import { Reaction } from '../reaction.entity';

type Import = NestjsRepository.Import;

const entities = [Reaction];
const importingConfigModules: Import[] = [TypeOrmModule.forFeature(entities)];
const reactionsImports: Import[] = [...importingConfigModules];

export default reactionsImports;
