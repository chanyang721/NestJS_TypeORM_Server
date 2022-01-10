import { Test, TestingModule } from '@nestjs/testing';
import { MoneyController } from '../../src/money/money.controller';
import { MoneyService } from '../../src/money/money.service';

describe('MoneyController', () => {
  let controller: MoneyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoneyController],
      providers: [MoneyService],
    }).compile();

    controller = module.get<MoneyController>(MoneyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
