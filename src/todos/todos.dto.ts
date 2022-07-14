import { IsBoolean, IsString, Length } from 'class-validator';
import { Todo } from './type';

export class CreateTodoDto {
  @IsString()
  id: Todo['id'];

  @IsString()
  @Length(1, 20)
  title: Todo['title'];

  @IsString()
  @Length(1, 100)
  text: Todo['text'];

  @IsBoolean()
  isCompleted: Todo['isCompleted'];
}

export class UpdateTodoDto {
  title: Todo['title'];
  text: Todo['text'];
  isCompleted: Todo['isCompleted'];
}
