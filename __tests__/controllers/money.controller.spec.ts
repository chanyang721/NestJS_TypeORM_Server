import { Test, TestingModule } from '@nestjs/testing';
import { MoneyController } from '../../src/api/money/money.controller';
import { MoneyService } from '../../src/api/money/money.service';

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
