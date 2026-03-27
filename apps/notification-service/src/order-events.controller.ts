import { Controller, Logger } from '@nestjs/common';
import { Ctx, EventPattern, KafkaContext, Payload } from '@nestjs/microservices';

import {
  ORDER_CREATED_TOPIC,
  OrderCreatedEvent,
} from '../../../packages/contracts/src/order-created.event';
import { NotificationStatusService } from './notification-status.service';

@Controller()
export class OrderEventsController {
  private readonly logger = new Logger(OrderEventsController.name);

  constructor(
    private readonly notificationStatusService: NotificationStatusService,
  ) {}

  @EventPattern(ORDER_CREATED_TOPIC)
  handleOrderCreated(
    @Payload() event: OrderCreatedEvent,
    @Ctx() context: KafkaContext,
  ): void {
    const message = context.getMessage();
    const reservation = this.notificationStatusService.recordReservation(event, {
      topic: context.getTopic(),
      partition: context.getPartition(),
      offset: message.offset,
    });

    this.logger.log(
      [
        `Reserved notification flow for order=${event.orderId}`,
        `customer=${event.customerId}`,
        `topic=${reservation.topic}`,
        `partition=${reservation.partition}`,
        `offset=${reservation.offset}`,
        `processedCount=${this.notificationStatusService.getProcessedCount()}`,
      ].join(' '),
    );
  }
}
