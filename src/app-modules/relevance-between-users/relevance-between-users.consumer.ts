import { Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job } from 'bull';
import { BullRepository } from '../../core/bull/bull.repository';
import { RelevanceBetweenUsersService } from './relevance-between-users.service';

@Injectable()
@Processor(BullRepository.Queues.data_analyze)
export class RelevanceBetweenUsersConsumer {
  constructor(
    private readonly _relevanceBetweenUsersService: RelevanceBetweenUsersService,
  ) {}

  @Process(BullRepository.Queues.data_analyze)
  handleJob(job: Job<{ userFromId: string; userToId: string }>) {
    const { userFromId, userToId } = job.data;
    this._relevanceBetweenUsersService.upsert(userFromId, userToId);
  }
}
