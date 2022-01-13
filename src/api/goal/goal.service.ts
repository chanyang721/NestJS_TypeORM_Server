import { Injectable } from '@nestjs/common';
import { Goal } from 'src/database/entities/goal.entity';

@Injectable()
export class GoalService {
  create(createGoalDto: Goal[]) {
    return 'This action adds a new goal';
  }

  findAll() {
    return `This action returns all goal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} goal`;
  }

  update(id: number, updateGoalDto: Goal[]) {
    return `This action updates a #${id} goal`;
  }

  remove(id: number) {
    return `This action removes a #${id} goal`;
  }
}
