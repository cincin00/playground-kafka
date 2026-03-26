import {
  Inject,
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { randomUUID } from 'crypto';

import {
  CreateOrderRequest,
  ORDER_CREATED_TOPIC,
  OrderCreatedEvent,
} from '../../../packages/contracts/src/order-created.event';
import { ORDERS_KAFKA_CLIENT } from './orders.constants';

@Injectable()
export class OrdersService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(OrdersService.name);

  constructor(
    @Inject(ORDERS_KAFKA_CLIENT) private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit(): Promise<void> {
    await this.kafkaClient.connect();
    this.logger.log(
      `Producer connected to ${process.env.KAFKA_BROKERS ?? 'localhost:9094'}`,
    );
  }

  async onModuleDestroy(): Promise<void> {
    await Promise.resolve(this.kafkaClient.close());
  }

  async createOrder(input: CreateOrderRequest): Promise<OrderCreatedEvent> {
    const event: OrderCreatedEvent = {
      eventId: randomUUID(),
      eventName: ORDER_CREATED_TOPIC,
      occurredAt: new Date().toISOString(),
      orderId: randomUUID(),
      customerId: input.customerId,
      totalAmount: input.totalAmount,
      currency: input.currency,
    };

    await this.emitOrderCreated(event);
    this.logger.log(
      `Published ${ORDER_CREATED_TOPIC} for order=${event.orderId}`,
    );

    return event;
  }

  private async emitOrderCreated(event: OrderCreatedEvent): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      this.kafkaClient.emit(ORDER_CREATED_TOPIC, event).subscribe({
        next: () => undefined,
        error: reject,
        complete: resolve,
      });
    });
  }
}
