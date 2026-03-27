import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { SupportedCurrency } from '../../../packages/contracts/src/order-created.event';

export class HealthResponseDto {
  @ApiProperty({ example: 'producer-api' })
  service!: string;

  @ApiProperty({ example: 'ok' })
  status!: string;
}

export class CreateOrderRequestDto {
  @ApiPropertyOptional({
    description: '주문을 생성한 고객 식별자입니다. 비워두면 서버가 자동으로 채웁니다.',
    example: 'customer-101',
  })
  customerId?: string;

  @ApiPropertyOptional({
    description: '주문 총액입니다. 비워두면 기본값 15000이 사용됩니다.',
    example: 42000,
  })
  totalAmount?: number;

  @ApiPropertyOptional({
    description: '통화 코드입니다. `USD`가 아니면 `KRW`로 처리됩니다.',
    enum: ['KRW', 'USD'],
    example: 'KRW',
  })
  currency?: SupportedCurrency;
}

export class OrderCreatedEventDto {
  @ApiProperty({ example: '29507ae8-663e-4ec4-9415-a854ec596218' })
  eventId!: string;

  @ApiProperty({ example: 'orders.created.v1' })
  eventName!: string;

  @ApiProperty({ example: '2026-03-26T04:40:04.385Z' })
  occurredAt!: string;

  @ApiProperty({ example: '92c2e72c-044d-41f3-918d-63c1111c2f8b' })
  orderId!: string;

  @ApiProperty({ example: 'customer-101' })
  customerId!: string;

  @ApiProperty({ example: 42000 })
  totalAmount!: number;

  @ApiProperty({ enum: ['KRW', 'USD'], example: 'KRW' })
  currency!: SupportedCurrency;
}

export class PublishOrderResponseDto {
  @ApiProperty({ example: 'Published orders.created.v1' })
  message!: string;

  @ApiProperty({ type: OrderCreatedEventDto })
  event!: OrderCreatedEventDto;
}
