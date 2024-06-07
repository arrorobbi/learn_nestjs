import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export interface Cat {
  name: string;
  age: number;
}

export class CreateCatDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  age: number;
}
