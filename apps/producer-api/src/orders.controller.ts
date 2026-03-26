import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { CreateOrderRequest } from '../../../packages/contracts/src/order-created.event';
import { OrdersService } from './orders.service';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('health')
  getHealth() {
    return {
      service: 'producer-api',
      status: 'ok',
    };
  }

  @Post('orders')
  async createOrder(@Body() body: Partial<CreateOrderRequest>) {
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
