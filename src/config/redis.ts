// import IORedis from "ioredis";
// import "dotenv/config";

// export const connection = new IORedis({
//   host: process.env.REDIS_HOST,
//   port: Number(process.env.REDIS_PORT),

//   // BullMQ workers need this to be null
//   maxRetriesPerRequest: null,
// });

import { Redis } from "ioredis";
import "dotenv/config";

export const connection = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),

  maxRetriesPerRequest: null,
});
