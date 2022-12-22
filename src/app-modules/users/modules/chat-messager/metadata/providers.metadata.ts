import { Provider } from '@nestjs/common';
import { ChatMessagerService } from '../chat-messager.service';

const services: Provider[] = [ChatMessagerService];
const chatMessagerProviders: Provider[] = [...services];

export default chatMessagerProviders;
