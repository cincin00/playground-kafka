import { Controller, Logger } from '@nestjs/common';
import { Ctx, EventPattern, KafkaContext, Payload } from '@nestjs/microservices';

import {
  ORDER_CREATED_TOPIC,
  OrderCreatedEvent,
} from '../../../packages/contracts/src/order-created.event';

@Controller()
export class OrderEventsController {
  private readonly logger = new Logger(OrderEventsController.name);

  @EventPattern(ORDER_CREATED_TOPIC)
  handleOrderCreated(
    @Payload() event: OrderCreatedEvent,
    @Ctx() context: KafkaContext,
  ): void {
    const message = context.getMessage();

    this.logger.log(
      [
        `Reserved notification flow for order=${event.orderId}`,
        `customer=${event.customerId}`,
        `topic=${context.getTopic()}`,
        `partition=${context.getPartition()}`,
        `offset=${message.offset}`,
      ].join(' '),
    );
  }
}
