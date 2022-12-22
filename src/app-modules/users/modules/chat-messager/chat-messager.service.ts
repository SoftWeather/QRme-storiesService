import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, FindOptionsWhere, Repository } from 'typeorm';
import { LoggerCreator } from '../../../../core/comm-utils/logging/logger-creator';
import { ChatMessage } from './entities/chat-message.entity';

@Injectable()
export class ChatMessagerService {
  constructor(
    @InjectRepository(ChatMessage)
    private readonly _chatMessagesRepository: Repository<ChatMessage>,
  ) {}

  async getChatMessagesCountByIntervalAndUserFromIdAndUserToId(
    userFromId: string,
    userToId: string,
    interval?: number,
  ): Promise<number> {
    const conditionCreateDateTime: FindOptionsWhere<ChatMessage> = {};

    if (interval && typeof interval !== 'number') return undefined;

    if (interval) {
      const dateNow: Date = new Date();
      dateNow.setDate(dateNow.getDate() + 1);
      const dateFrom: Date = new Date(Date.now() - interval);

      conditionCreateDateTime.createDateTime = Between(dateFrom, dateNow);
    }

    const queryBuilder = this._chatMessagesRepository
      .createQueryBuilder('chat_message')
      .innerJoin('chat_message.dialog', 'dialog')
      .where({
        user_from: { id: userFromId },
      })
      .andWhere(
        `
        dialog.id IN (
            SELECT 
                id 
            FROM 
                dialogs 
            WHERE 
                EXISTS(
                    SELECT 
                        id 
                    FROM 
                        dialog_members
                    WHERE
                        "dialogId" = dialogs.id
                    AND 
                        "userId" = :userFromId 
                )
            AND
                EXISTS(
                    SELECT 
                        id 
                    FROM 
                        dialog_members
                    WHERE
                        "dialogId" = dialogs.id
                    AND 
                        "userId" = :userToId 
                )
        )
      `,
        { userFromId, userToId },
      )
      .andWhere(conditionCreateDateTime);

    try {
      const count: number = await queryBuilder.getCount();

      return count;
    } catch (error) {
      LoggerCreator.error(
        ChatMessagerService.name,
        this.getChatMessagesCountByIntervalAndUserFromIdAndUserToId.name,
        error,
      );

      return undefined;
    }
  }
}
