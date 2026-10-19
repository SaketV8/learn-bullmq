import { QueueEvents } from "bullmq";
import { connection } from "./config/redis.js";

const queueEvents = new QueueEvents("email-queue", {
  connection,
});

queueEvents.on("waiting", ({ jobId }) => {
  console.log(`Job ${jobId} is waiting`);
});

queueEvents.on("active", ({ jobId }) => {
  console.log(`Job ${jobId} is active`);
});

queueEvents.on("completed", ({ jobId, returnvalue }) => {
  console.log(`Job ${jobId} completed`);
  console.log("Result:", returnvalue);
});

queueEvents.on("failed", ({ jobId, failedReason }) => {
  console.log(`Job ${jobId} failed`);
  console.log("Reason:", failedReason);
});