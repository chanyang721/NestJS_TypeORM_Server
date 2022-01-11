import { Module } from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelController } from './level.controller';

@Module({
  imports: [],
  controllers: [LevelController],
  providers: [LevelService],
})
export class LevelModule {}
