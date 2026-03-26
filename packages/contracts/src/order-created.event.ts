export const ORDER_CREATED_TOPIC = 'orders.created.v1';

export type SupportedCurrency = 'KRW' | 'USD';

export interface CreateOrderRequest {
  customerId: string;
  totalAmount: number;
  currency: SupportedCurrency;
}

export interface OrderCreatedEvent {
  eventId: string;
  eventName: typeof ORDER_CREATED_TOPIC;
  occurredAt: string;
  orderId: string;
  customerId: string;
  totalAmount: number;
  currency: SupportedCurrency;
}

export function getKafkaBrokers(): string[] {
  return (process.env.KAFKA_BROKERS ?? 'localhost:9094')
    .split(',')
    .map((broker: string) => broker.trim())
    .filter(Boolean);
}
