import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Question } from './question.entity';

@Entity('options')
export class Option {
  @PrimaryGeneratedColumn({
    comment: 'The option unique identifier',
  })
  id: number;
  @Column({ type: 'varchar' })
  text: string;
  @Column({ type: 'boolean' })
  isCorrect: boolean;
  @ManyToOne(() => Question, (question) => question.options)
  question: Question;
}
