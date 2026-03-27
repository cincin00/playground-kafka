import { Controller, Get } from '@nestjs/common';

import { NotificationStatusService } from './notification-status.service';

@Controller()
export class StatusController {
  constructor(
    private readonly notificationStatusService: NotificationStatusService,
  ) {}

  @Get('health')
  getHealth() {
    return this.notificationStatusService.getHealth();
  }

  @Get('status')
  getStatus() {
    return this.notificationStatusService.getStatus();
  }
}
