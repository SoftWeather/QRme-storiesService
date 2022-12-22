import { Provider } from '@nestjs/common';
import { ReactionsService } from '../reactions.service';

const services: Provider[] = [ReactionsService];
const reactionsProviders: Provider[] = [...services];

export default reactionsProviders;
