import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Question } from '../entities/question.entity';
import { CreateQuestionDto } from '../_dto/create-question.dto';
import { TYPES } from 'src/core/types';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @Inject(TYPES.QuestionModel)
    private questionRepository: Repository<Question>,
    @Inject(TYPES.QuizModel) private quizRepository: Repository<Quiz>,
  ) {}

  async createQuestion(question: CreateQuestionDto, quiz: Quiz) {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });
    // Adding question to exisiting questions in a particular QUIZ using spread method
    quiz.questions = [newQuestion, ...quiz.questions];
    await this.quizRepository.save(quiz);
    return newQuestion;
  }

  async findQuestionById(questionId: number): Promise<Question> {
    return this.questionRepository.findOne({
      where: { id: questionId },
      relations: ['quiz', 'options'],
    });
  }
}
