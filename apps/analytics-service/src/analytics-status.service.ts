import { Injectable } from '@nestjs/common';

import { OrderCreatedEvent } from '../../../packages/contracts/src/order-created.event';

interface AnalyticsProjectionUpdate {
  eventId: string;
  orderId: string;
  totalAmount: number;
  currency: 'KRW' | 'USD';
  topic: string;
  partition: number;
  offset: string;
  occurredAt: string;
  projectedAt: string;
}

@Injectable()
export class AnalyticsStatusService {
  private readonly recentUpdates: AnalyticsProjectionUpdate[] = [];
  private processedCount = 0;
  private readonly totalsByCurrency: Record<'KRW' | 'USD', number> = {
    KRW: 0,
    USD: 0,
  };

  recordProjectionUpdate(
    event: OrderCreatedEvent,
    metadata: {
      topic: string;
      partition: number;
      offset: string;
    },
  ): AnalyticsProjectionUpdate {
    const update: AnalyticsProjectionUpdate = {
      eventId: event.eventId,
      orderId: event.orderId,
      totalAmount: event.totalAmount,
      currency: event.currency,
      topic: metadata.topic,
      partition: metadata.partition,
      offset: metadata.offset,
      occurredAt: event.occurredAt,
      projectedAt: new Date().toISOString(),
    };

    this.processedCount += 1;
    this.totalsByCurrency[event.currency] += event.totalAmount;
    this.recentUpdates.unshift(update);
    this.recentUpdates.splice(10);

    return update;
  }

  getHealth() {
    return {
      service: 'analytics-service',
      status: 'ok',
    };
  }

  getStatus() {
    return {
      service: 'analytics-service',
      status: 'ok',
      groupId: process.env.KAFKA_GROUP_ID ?? 'analytics-service-group',
      processedCount: this.processedCount,
      lastProcessedAt: this.recentUpdates[0]?.projectedAt ?? null,
      totalsByCurrency: this.totalsByCurrency,
      recentUpdates: this.recentUpdates,
    };
  }

  getProcessedCount(): number {
    return this.processedCount;
  }
}
