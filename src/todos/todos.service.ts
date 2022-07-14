import { Injectable } from '@nestjs/common';
import { UpdateTodoDto } from './todos.dto';
import { Todo } from './type';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
  }

  findBy(id: string): Todo {
    return this.todos.find((todo) => todo.id === id);
  }

  create(todo: Todo) {
    this.todos.push(todo);
  }

  update(id: string, todo: UpdateTodoDto) {
    const targetTodoIndex = this.todos.findIndex((todo) => todo.id === id);
    this.todos[targetTodoIndex] = { ...todo, id };
  }

  destroy(id: string) {
    const newTodos = this.todos.filter((todo) => todo.id !== id);
    this.todos = newTodos;
  }
}
