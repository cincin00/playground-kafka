import { Module } from '@nestjs/common';

import { OrderEventsController } from './order-events.controller';
import { NotificationStatusService } from './notification-status.service';
import { StatusController } from './status.controller';

@Module({
  controllers: [OrderEventsController, StatusController],
  providers: [NotificationStatusService],
})
export class AppModule {}
