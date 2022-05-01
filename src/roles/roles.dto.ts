import { IsNotEmpty, IsString } from "class-validator";

export class CreateRolesDto {
    @IsString()
    @IsNotEmpty()
    public name: string;
}
