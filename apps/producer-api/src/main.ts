import 'reflect-metadata';

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.PORT ?? 3000);

  await app.listen(port);

  Logger.log(`Producer API listening on http://localhost:${port}`, 'Bootstrap');
  Logger.log(
    `Kafka brokers: ${process.env.KAFKA_BROKERS ?? 'localhost:9094'}`,
    'Bootstrap',
  );
}

bootstrap().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  const stack = error instanceof Error ? error.stack : undefined;

  Logger.error(message, stack, 'Bootstrap');
  process.exit(1);
});
