import { emailQueue } from "./queues/email.queue.js";

const randomDelay = () => {
  return Math.floor(Math.random() * 1000) + 1000;
};

async function main() {
  let jobNumber = 1;

  // infinity loop
  while (true) {
    const job = await emailQueue.add("send-email", {
      to: `saket${jobNumber}@example.com`,
      subject: `Email ${jobNumber}`,
      body: `This email is ${jobNumber}`,
    });

    console.log("Produces Job:", job.id);

    jobNumber++;

    // add random delay
    const delay = randomDelay();

    console.log(`Next job in ${delay}ms\n`);

    await new Promise((resolve, reject) => {
      setTimeout(resolve, delay);
    });
  }


}

// main();

main().catch(console.error);

// await emailQueue.close();
