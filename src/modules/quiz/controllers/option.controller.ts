import { Body, Controller, Post } from '@nestjs/common';
import { QuestionService } from '../services/question.service';
import { OptionService } from '../services/option.service';
import { CreateOptionDto } from '../_dto/create-option.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Option')
@Controller('question/option')
export class OptionController {
  constructor(
    private readonly optionService: OptionService,
    private readonly questionService: QuestionService,
  ) {}

  @Post()
  async saveOptionToQuestion(@Body() createOptionDto: CreateOptionDto) {
    const question = await this.questionService.findQuestionById(
      createOptionDto.questionId,
    );
    // option.service will add option to question and return the question
    return await this.optionService.createOption(createOptionDto, question);
  }
}
