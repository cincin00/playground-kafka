import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import {
  CreateOrderRequestDto,
  HealthResponseDto,
  PublishOrderResponseDto,
} from './orders.dto';
import { OrdersService } from './orders.service';

@ApiTags('producer-api')
@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('health')
  @ApiOperation({ summary: 'Producer API 상태를 확인합니다.' })
  @ApiOkResponse({ type: HealthResponseDto })
  getHealth(): HealthResponseDto {
    return {
      service: 'producer-api',
      status: 'ok',
    };
  }

  @Post('orders')
  @ApiOperation({
    summary: '주문 생성 이벤트를 Kafka에 발행합니다.',
    description:
      'Swagger UI의 Try it out 버튼으로 요청 본문을 입력하면 `orders.created.v1` 메시지가 발행됩니다.',
  })
  @ApiBody({ type: CreateOrderRequestDto })
  @ApiOkResponse({ type: PublishOrderResponseDto })
  @ApiBadRequestResponse({
    description: 'totalAmount가 양수가 아니면 400 에러를 반환합니다.',
  })
  async createOrder(
    @Body() body: CreateOrderRequestDto,
  ): Promise<PublishOrderResponseDto> {
    const totalAmount = Number(body.totalAmount ?? 15000);

    if (!Number.isFinite(totalAmount) || totalAmount <= 0) {
      throw new BadRequestException(
        'totalAmount must be a positive number',
      );
    }

    const event = await this.ordersService.createOrder({
      customerId: body.customerId?.trim() || `customer-${Date.now()}`,
      totalAmount,
      currency: body.currency === 'USD' ? 'USD' : 'KRW',
    });

    return {
      message: `Published ${event.eventName}`,
      event,
    };
  }
}
