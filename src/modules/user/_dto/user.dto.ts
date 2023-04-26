import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, Length, Matches } from 'class-validator';
import { MESSAGES, REGEX } from 'src/core/constants';

export class UserRegisterDto {
  @ApiProperty({
    example: 'wings',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'wings@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'secret-password',
  })
  @IsNotEmpty()
  @Length(8, 64)
  @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGES.PASSWORD_RULE_MESSAGE,
  })
  password: string;

  @ApiProperty({
    example: 'secret-password',
  })
  @IsNotEmpty()
  @Length(8, 64)
  @Matches(REGEX.PASSWORD_RULE, { message: MESSAGES.PASSWORD_RULE_MESSAGE })
  confirm: string;
}
