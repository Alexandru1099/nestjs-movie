import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateMoviesDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4, { message: 'title is too short' })
  @MaxLength(30, { message: 'password is too long' })
  public title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10, { message: 'context is too short' })
  public context: string;

  @IsString()
  @IsNotEmpty()
  public userId: string;

  @IsString()
  @IsNotEmpty()
  public photo: string;

  @IsString()
  @IsNotEmpty()
  public starring: string;

  @IsString()
  @IsNotEmpty()
  public content: string;

  @IsString()
  @IsNotEmpty()
  public runtime: string;

  @IsString()
  @IsNotEmpty()
  public release: string;
}
