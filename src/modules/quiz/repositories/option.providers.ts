import { DataSource } from 'typeorm';
import { Option } from '../entities/option.entity';
import { TYPES } from 'src/core/types';

export const optionProviders = [
  {
    provide: TYPES.OptionModel,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Option),
    inject: [TYPES.DatabaseConnection],
  },
];
