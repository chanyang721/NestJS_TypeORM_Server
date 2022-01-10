import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MoneyService } from './money.service';
import { Money } from 'src/database/entities/money.entity';

@Controller('money')
export class MoneyController {
  constructor(private readonly moneyService: MoneyService) {}

  @Post()
  create(@Body() createMoneyDto: Money[]) {
    return this.moneyService.create(createMoneyDto);
  }

  @Get()
  findAll() {
    return this.moneyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moneyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMoneyDto: Money[]) {
    return this.moneyService.update(+id, updateMoneyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moneyService.remove(+id);
  }
}
