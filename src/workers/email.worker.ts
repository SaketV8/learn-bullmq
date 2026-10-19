import { Worker } from "bullmq";
import { connection } from "../config/redis.js";
import { type EmailJobData } from "../queues/email.queue.js";

const worker = new Worker<EmailJobData>(
  "email-queue",

  async (job) => {
    console.log(`Processing job: ${job.id}`);

    console.log(`To: ${job.data.to}`);
    console.log(`Subject: ${job.data.subject}`);

    // Simulate sending email
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Email sent successfully!");

    return {
      success: true,
    };
  },

  {
    connection,
  },
);

worker.on("completed", (job) => {
  console.log("=========================")
  console.log(`Job ${job.id} completed`);
  console.log("=========================")
});

worker.on("failed", (job, error) => {
  console.log(`Job ${job?.id} failed`);
  console.log(error.message);
});