import { Controller, Get } from '@nestjs/common';

import { AnalyticsStatusService } from './analytics-status.service';

@Controller()
export class StatusController {
  constructor(private readonly analyticsStatusService: AnalyticsStatusService) {}

  @Get('health')
  getHealth() {
    return this.analyticsStatusService.getHealth();
  }

  @Get('status')
  getStatus() {
    return this.analyticsStatusService.getStatus();
  }
}
