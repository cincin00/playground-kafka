import { Controller, Logger } from '@nestjs/common';
import { Ctx, EventPattern, KafkaContext, Payload } from '@nestjs/microservices';

import {
  ORDER_CREATED_TOPIC,
  OrderCreatedEvent,
} from '../../../packages/contracts/src/order-created.event';
import { AnalyticsStatusService } from './analytics-status.service';

@Controller()
export class OrderEventsController {
  private readonly logger = new Logger(OrderEventsController.name);

  constructor(private readonly analyticsStatusService: AnalyticsStatusService) {}

  @EventPattern(ORDER_CREATED_TOPIC)
  handleOrderCreated(
    @Payload() event: OrderCreatedEvent,
    @Ctx() context: KafkaContext,
  ): void {
    const message = context.getMessage();
    const projection = this.analyticsStatusService.recordProjectionUpdate(
      event,
      {
        topic: context.getTopic(),
        partition: context.getPartition(),
        offset: message.offset,
      },
    );

    this.logger.log(
      [
        `Updated analytics projection for order=${event.orderId}`,
        `amount=${event.totalAmount}${event.currency}`,
        `topic=${projection.topic}`,
        `partition=${projection.partition}`,
        `offset=${projection.offset}`,
        `processedCount=${this.analyticsStatusService.getProcessedCount()}`,
      ].join(' '),
    );
  }
}
