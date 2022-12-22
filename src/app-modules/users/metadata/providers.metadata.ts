import { Provider } from '@nestjs/common';
import { UsersService } from '../users.service';

const services: Provider[] = [UsersService];
const usersProviders: Provider[] = [...services];

export default usersProviders;
