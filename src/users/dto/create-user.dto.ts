import {
  IsBoolean,
  IsEmail,
  IsIn,
  IsInt,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsInt()
  readonly id: number;

  @IsEmail()
  readonly email: string;

  @MinLength(6)
  @MaxLength(32)
  @IsString()
  readonly password: string;

  @IsBoolean()
  readonly banned: boolean;

  @IsString()
  readonly banReason: string;
}
