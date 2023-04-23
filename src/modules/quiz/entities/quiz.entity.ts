import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Question } from './question.entity';

@Entity('quizes')
export class Quiz {
  save() {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn({
    comment: 'The quiz unique identifier',
  })
  id: number;
  @Column({ type: 'varchar' })
  title: string;
  @Column({ type: 'text' })
  description: string;
  @Column({ type: 'boolean', default: 1 })
  isActive: boolean;

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
