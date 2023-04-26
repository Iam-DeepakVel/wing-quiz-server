import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { DatabaseModule } from 'src/database/database.module';
import { quizProviders } from './repositories/quiz.providers';
import { QuestionController } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { questionProviders } from './repositories/question.providers';
import { optionProviders } from './repositories/option.providers';
import { OptionService } from './services/option.service';
import { OptionController } from './controllers/option.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [QuizController, QuestionController, OptionController],
  providers: [
    ...quizProviders,
    ...questionProviders,
    ...optionProviders,
    QuizService,
    QuestionService,
    OptionService,
  ],
})
export class QuizModule {}
