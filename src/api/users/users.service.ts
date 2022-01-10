import { Injectable } from '@nestjs/common';
import { User } from 'src/database/entities/user.entity';

@Injectable()
export class UsersService {
  create(createUserDto: User[]) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: User[]) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
