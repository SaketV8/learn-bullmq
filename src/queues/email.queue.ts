import { Queue } from "bullmq";
import { connection } from "../config/redis.js";

export interface EmailJobData {
  to: string;
  subject: string;
  body: string;
}

export const emailQueue = new Queue<EmailJobData>("email-queue", {
  connection,
});