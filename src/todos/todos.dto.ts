import { Todo } from './type';

export class CreateTodoDto {
  id: Todo['id'];
  title: Todo['title'];
  text: Todo['text'];
  isCompleted: Todo['isCompleted'];
}

export class UpdateTodoDto {
  title: Todo['title'];
  text: Todo['text'];
  isCompleted: Todo['isCompleted'];
}
