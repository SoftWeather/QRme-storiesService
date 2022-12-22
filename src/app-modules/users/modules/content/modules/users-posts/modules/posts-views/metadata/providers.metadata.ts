import { Provider } from '@nestjs/common';
import { PostsViewsService } from '../posts-views.service';

const services: Provider[] = [PostsViewsService];
const postsViewsProviders: Provider[] = [...services];

export default postsViewsProviders;
