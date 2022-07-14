import { Injectable } from '@nestjs/common';
import { Todo } from './type';

@Injectable()
export class TodosService {
  private readonly todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
  }

  create() {
    this.todos.push({ text: 'a', title: 'a', isCompleted: true });
  }
}
