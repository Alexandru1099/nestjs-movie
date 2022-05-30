import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(20, { message: 'password is too long' })
  @MinLength(4, { message: 'password is too short' })
  public email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20, { message: 'password is too long' })
  @MinLength(8, { message: 'password is too short' })
  public password: string;

  @IsString()
  @IsNotEmpty()
  public age: string;

  @IsString()
  @IsNotEmpty()
  public gender: string;
}
