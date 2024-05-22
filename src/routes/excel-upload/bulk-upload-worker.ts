// worker.ts
import { Worker } from 'bullmq';
import employeeController from '../../controllers/employeeController';
import { hashPassword } from '../../utils/bcrypt';
import { redisClient } from '../../utils/redisConfig';

const worker = new Worker("excel-queue", async job => {
  const { file } = job.data;

  if (file) {
    await Promise.all(file.map(async (employee: any) => {
      return await employeeController.createEmployeeAndUser(
        {
          title: employee.title,
          yearly_salary: employee.yearlySalary,
          address: employee.address
        },
        {
          email: employee.email,
          name: employee.name,
          phone: employee.phone,
          password: await hashPassword(employee.password)
        }
      );
    }));
  }
}, { connection: redisClient });

worker.on('completed', (job) => {
  console.log(`Job ${job.id} completed successfully`);
});

worker.on('failed', (job, err) => {
  console.error(`Job ${job?.id} failed with error: ${err.message}`);
});
