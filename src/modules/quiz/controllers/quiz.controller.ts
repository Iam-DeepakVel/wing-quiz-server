import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Param,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../_dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}
  @Get()
  getAllQuiz(): Promise<[Quiz[], number]> {
    return this.quizService.getAllQuiz();
  }

  @Get('/:id')
  getQuizById(@Param('id', ParseIntPipe) id: number) {
    return this.quizService.getQuizById(id);
  }

  @Post()
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  createQuiz(@Body() quizData: CreateQuizDto) {
    return this.quizService.createNewQuiz(quizData);
  }
}
