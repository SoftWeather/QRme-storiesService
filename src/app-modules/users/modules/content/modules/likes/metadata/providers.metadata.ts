import { Provider } from '@nestjs/common';
import { LikesService } from '../likes.service';

const services: Provider[] = [LikesService];
const likesProviders: Provider[] = [...services];

export default likesProviders;
