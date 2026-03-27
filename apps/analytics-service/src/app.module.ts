import { Module } from '@nestjs/common';

import { AnalyticsStatusService } from './analytics-status.service';
import { OrderEventsController } from './order-events.controller';
import { StatusController } from './status.controller';

@Module({
  controllers: [OrderEventsController, StatusController],
  providers: [AnalyticsStatusService],
})
export class AppModule {}
