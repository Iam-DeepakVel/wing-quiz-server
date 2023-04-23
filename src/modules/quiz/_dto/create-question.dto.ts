import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty({ message: 'The question should have a title' })
  @Length(3, 50)
  question: string;

  @IsNotEmpty()
  quizId: number;
}
