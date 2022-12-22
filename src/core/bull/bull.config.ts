import { BullRootModuleOptions } from '@nestjs/bull';
import * as Redis from 'ioredis';
import 'dotenv/config';
import { RateLimiter } from 'bull';

const redisConfig: Redis.RedisOptions = {
  host: process.env.BULL_HOST || 'localhost',
  port: +process.env.BULL_PORT || 6379,
  password: process.env.BULL_PASSWORD,
};

const limiterConfig: RateLimiter = {
  max: +process.env.BULL_DEFAULT_LIMITER_MAX || 3,
  duration: +process.env.BULL_DEFAULT_LIMITER_DURATION || 1000,
};

const bullConfig: BullRootModuleOptions = {
  redis: redisConfig,
  limiter: limiterConfig,
};

export default bullConfig;
