import 'reflect-metadata';

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.PORT ?? 3000);
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Producer API')
    .setDescription('Swagger UI에서 주문 생성 이벤트를 Kafka로 발행할 수 있습니다.')
    .setVersion('1.0.0')
    .addTag('producer-api')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('docs', app, swaggerDocument, {
    swaggerOptions: {
      docExpansion: 'list',
      persistAuthorization: true,
    },
  });

  await app.listen(port);

  Logger.log(`Producer API listening on http://localhost:${port}`, 'Bootstrap');
  Logger.log(`Swagger UI available at http://localhost:${port}/docs`, 'Bootstrap');
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
