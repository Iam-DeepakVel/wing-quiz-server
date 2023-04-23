import { DataSource } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';
import { TYPES } from 'src/core/types';

export const quizProviders = [
  {
    provide: TYPES.QuizModel,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Quiz),
    inject: [TYPES.DatabaseConnection],
  },
];
