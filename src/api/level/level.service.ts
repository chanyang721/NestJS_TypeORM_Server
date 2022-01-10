import { Injectable } from '@nestjs/common';
import { Level } from 'src/database/entities/level.entity';

@Injectable()
export class LevelService {
  create(createLevelDto: Level[]) {
    return 'This action adds a new level';
  }

  findAll() {
    return `This action returns all level`;
  }

  findOne(id: number) {
    return `This action returns a #${id} level`;
  }

  update(id: number, updateLevelDto: Level[]) {
    return `This action updates a #${id} level`;
  }

  remove(id: number) {
    return `This action removes a #${id} level`;
  }
}
