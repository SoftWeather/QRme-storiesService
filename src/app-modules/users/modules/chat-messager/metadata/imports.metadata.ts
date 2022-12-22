import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsRepository } from '../../../../../core/nestjs/nestjs.repository';
import { ChatMessage } from '../entities/chat-message.entity';
import { DialogMember } from '../entities/dialog-member.entity';
import { Dialog } from '../entities/dialog.entity';

type Import = NestjsRepository.Import;

const entities = [ChatMessage, Dialog, DialogMember];
const importingConfigModules: Import[] = [TypeOrmModule.forFeature(entities)];
const chatMessagerImports: Import[] = [...importingConfigModules];

export default chatMessagerImports;
