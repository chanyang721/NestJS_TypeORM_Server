import { Injectable } from '@nestjs/common';
import { Category } from 'src/database/entities/category.entity';

@Injectable()
export class CategoryService {
  create(createCategoryDto: Category[]) {
    return 'This action adds a new category';
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: Category[]) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
