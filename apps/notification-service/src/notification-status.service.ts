import { Injectable } from '@nestjs/common';

import { OrderCreatedEvent } from '../../../packages/contracts/src/order-created.event';

interface NotificationReservation {
  eventId: string;
  orderId: string;
  customerId: string;
  topic: string;
  partition: number;
  offset: string;
  occurredAt: string;
  reservedAt: string;
}

@Injectable()
export class NotificationStatusService {
  private readonly recentReservations: NotificationReservation[] = [];
  private processedCount = 0;

  recordReservation(
    event: OrderCreatedEvent,
    metadata: {
      topic: string;
      partition: number;
      offset: string;
    },
  ): NotificationReservation {
    const reservation: NotificationReservation = {
      eventId: event.eventId,
      orderId: event.orderId,
      customerId: event.customerId,
      topic: metadata.topic,
      partition: metadata.partition,
      offset: metadata.offset,
      occurredAt: event.occurredAt,
      reservedAt: new Date().toISOString(),
    };

    this.processedCount += 1;
    this.recentReservations.unshift(reservation);
    this.recentReservations.splice(10);

    return reservation;
  }

  getHealth() {
    return {
      service: 'notification-service',
      status: 'ok',
    };
  }

  getStatus() {
    return {
      service: 'notification-service',
      status: 'ok',
      groupId: process.env.KAFKA_GROUP_ID ?? 'notification-service-group',
      processedCount: this.processedCount,
      lastProcessedAt: this.recentReservations[0]?.reservedAt ?? null,
      recentReservations: this.recentReservations,
    };
  }

  getProcessedCount(): number {
    return this.processedCount;
  }
}
