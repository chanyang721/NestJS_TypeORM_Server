import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Generated,
} from 'typeorm';
import { BaseColumn } from '../BaseColumn';

export type UserRoleType = 'admin' | 'editor' | 'ghost';

@Entity({ name: 'users' })
export class User extends BaseColumn {
  @Column('simple-json')
  profile: { name: string; nickname: string };

  @Column()
  gender: string;

  @Column({
    type: 'enum',
    enum: ['admin', 'editor', 'ghost'],
    default: 'ghost',
  })
  role: UserRoleType;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column()
  email: string;

  @Column({ type: 'timestamp' })
  birthday: Date;

  @Column()
  password: string;

  @Column()
  photo: string;
}
