// redisConfig.ts
import { Queue, Worker } from 'bullmq';
import IORedis from 'ioredis';

const redisClient =new IORedis({
  host: "localhost",  // Adjust the host and port as needed
  port: 6379,
  maxRetriesPerRequest: null
});

const fileUploadQueue = new Queue("excel-queue", { connection: redisClient });

export { fileUploadQueue, redisClient };
