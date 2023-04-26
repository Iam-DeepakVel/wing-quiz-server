import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../_dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { ApiTags } from '@nestjs/swagger';
import { AdminRoleGuard } from 'src/modules/auth/guard/admin-role.guard';
import { JwtAuthGuard } from 'src/modules/auth/guard/jwt-auth.guard';

@ApiTags('Quiz')
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
  @UseGuards(JwtAuthGuard, AdminRoleGuard)
  createQuiz(@Body() quizData: CreateQuizDto) {
    return this.quizService.createNewQuiz(quizData);
  }
}
