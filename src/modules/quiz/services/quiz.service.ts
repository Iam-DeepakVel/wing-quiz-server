import { Injectable, Inject } from '@nestjs/common';
import { CreateQuizDto } from '../_dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { Repository } from 'typeorm';
import { TYPES } from 'src/core/types';

@Injectable()
export class QuizService {
  constructor(
    @Inject(TYPES.QuizModel)
    private quizRepository: Repository<Quiz>,
  ) {}
  async getAllQuiz(): Promise<[Quiz[], number]> {
    return this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      .leftJoinAndSelect('qt.options', 'o')
      .getManyAndCount();
  }
  async createNewQuiz(quiz: CreateQuizDto) {
    return this.quizRepository.save(quiz);
  }

  async getQuizById(id: number) {
    return this.quizRepository.findOne({
      where: { id: id },
      relations: ['questions', 'questions.options'],
    });
  }
}
