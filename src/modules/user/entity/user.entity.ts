import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({
    comment: 'The user unique identifier',
  })
  id: number;
  //By default empty options will take as varchar
  @Column()
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
