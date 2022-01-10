import { Injectable } from '@nestjs/common';
import { Money } from 'src/database/entities/money.entity';

@Injectable()
export class MoneyService {
  create(createMoneyDto: Money[]) {
    return 'This action adds a new money';
  }

  findAll() {
    return `This action returns all money`;
  }

  findOne(id: number) {
    return `This action returns a #${id} money`;
  }

  update(id: number, updateMoneyDto: Money[]) {
    return `This action updates a #${id} money`;
  }

  remove(id: number) {
    return `This action removes a #${id} money`;
  }
}
