import 'reflect-metadata';

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { getKafkaBrokers } from '../../../packages/contracts/src/order-created.event';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.PORT ?? 3002);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: process.env.KAFKA_CLIENT_ID ?? 'analytics-service',
        brokers: getKafkaBrokers(),
      },
      consumer: {
        groupId: process.env.KAFKA_GROUP_ID ?? 'analytics-service-group',
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(port);

  Logger.log(
    `Analytics consumer is listening with group ${
      process.env.KAFKA_GROUP_ID ?? 'analytics-service-group'
    }`,
    'Bootstrap',
  );
  Logger.log(
    `Analytics status API listening on http://localhost:${port}/status`,
    'Bootstrap',
  );
}

bootstrap().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  const stack = error instanceof Error ? error.stack : undefined;

  Logger.error(message, stack, 'Bootstrap');
  process.exit(1);
});
