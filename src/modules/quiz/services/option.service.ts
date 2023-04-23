import { Inject, Injectable } from '@nestjs/common';
import { Option } from '../entities/option.entity';
import { TYPES } from 'src/core/types';
import { Repository } from 'typeorm';
import { CreateOptionDto } from '../dto/create-option.dto';
import { Question } from '../entities/question.entity';

@Injectable()
export class OptionService {
  constructor(
    @Inject(TYPES.OptionModel) private optionRepository: Repository<Option>,
    @Inject(TYPES.QuestionModel)
    private questionRepository: Repository<Question>,
  ) {}
  async createOption(option: CreateOptionDto, question: Question) {
    const newOption = await this.optionRepository.save({
      text: option.text,
      isCorrect: option.isCorrect,
    });
    question.options = [...question.options, newOption];
    await this.questionRepository.save(question);
    return question;
  }
}
