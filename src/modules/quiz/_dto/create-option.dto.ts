import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty()
  @Length(2, 50)
  text: string;
  @IsNotEmpty()
  questionId: number;
  @IsNotEmpty()
  isCorrect: boolean;
}
