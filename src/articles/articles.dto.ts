import { IsNotEmpty, IsString } from "class-validator";

export class CreateArticlesDto {
    @IsString()
    @IsNotEmpty()
    public name: string;
}
