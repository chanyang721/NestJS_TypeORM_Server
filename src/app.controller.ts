import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  create(@Body('name') name): string {
    console.log(name);
    return this.appService.postHello();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
