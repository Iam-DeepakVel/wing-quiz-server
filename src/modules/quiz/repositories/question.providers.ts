import { DataSource } from 'typeorm';
import { Question } from '../entities/question.entity';
import { TYPES } from 'src/core/types';

export const questionProviders = [
  {
    provide: TYPES.QuestionModel,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Question),
    inject: [TYPES.DatabaseConnection],
  },
];
