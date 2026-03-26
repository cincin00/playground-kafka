import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { getKafkaBrokers } from '../../../packages/contracts/src/order-created.event';
import { OrdersController } from './orders.controller';
import { ORDERS_KAFKA_CLIENT } from './orders.constants';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ORDERS_KAFKA_CLIENT,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: process.env.KAFKA_CLIENT_ID ?? 'orders-api',
            brokers: getKafkaBrokers(),
          },
          producerOnlyMode: true,
        },
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class AppModule {}
