import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from '../_dto/create-question.dto';
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Question')
@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly quizService: QuizService,
  ) {}
  @Post()
  @UsePipes(ValidationPipe)
  async saveQuestion(@Body() question: CreateQuestionDto) {
    const quiz = await this.quizService.getQuizById(question.quizId);
    return this.questionService.createQuestion(question, quiz);
  }
}
