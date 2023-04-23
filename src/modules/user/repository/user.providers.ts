import { DataSource } from 'typeorm';
import { TYPES } from 'src/core/types';
import { User } from '../entity/user.entity';

export const userProviders = [
  {
    provide: TYPES.UserModel,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [TYPES.DatabaseConnection],
  },
];
