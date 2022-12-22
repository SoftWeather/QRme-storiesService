import { BullModuleOptions } from '@nestjs/bull';

export namespace BullRepository {
  export enum Queues {
    data_analyze = 'data_analyze',
  }

  type Queue = keyof typeof Queues;

  const queuesList: Queue[] = Object.keys(Queues) as Queue[];

  function createQueues(): BullModuleOptions[] {
    const registerQueues: BullModuleOptions[] = queuesList.map(
      (queue: string) => {
        return {
          name: queue,
          prefix: 'queue',
        };
      },
    );

    return registerQueues;
  }

  // Так же можно переопределять какие-либо параметры конфигурации очередей в рамках одной очереди
  export const registerQueues: BullModuleOptions[] = createQueues();
}
