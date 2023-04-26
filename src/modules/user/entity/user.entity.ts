import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRoles } from '../enums/user.enum';

@Entity({ name: 'users' })
export class User {
  @ApiProperty({
    description: 'Primary key as User ID',
    example: 1,
  })
  @PrimaryGeneratedColumn({
    comment: 'The user unique identifier',
  })
  id: number;
  //By default empty options will take as varchar
  @ApiProperty({
    description: 'Username',
    example: 'Wings',
  })
  @Column()
  name: string;
  @ApiProperty({
    description: 'Email',
    example: 'Wings@gmail.com',
  })
  @Column({ unique: true })
  email: string;
  @ApiProperty({
    description: 'Password',
    example: 'secret',
  })
  @Column()
  password: string;
  @ApiProperty({
    description: 'When user was created',
  })
  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.MEMBER })
  role: UserRoles;

  @CreateDateColumn()
  createdAt: Date;
  @ApiProperty({
    description: 'When user was updated',
  })
  @UpdateDateColumn()
  updatedAt: Date;
}
