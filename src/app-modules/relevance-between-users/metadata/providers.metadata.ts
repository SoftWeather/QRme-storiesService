import { FrequencyService } from '../frequency/frequency.service';
import { RelevanceBetweenUsersConsumer } from '../relevance-between-users.consumer';
import { RelevanceBetweenUsersService } from '../relevance-between-users.service';

const consumers = [RelevanceBetweenUsersConsumer];
const services = [RelevanceBetweenUsersService, FrequencyService];
const relevanceBetweenUsersProviders = [...consumers, ...services];

export default relevanceBetweenUsersProviders;
