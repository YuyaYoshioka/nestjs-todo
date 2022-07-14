import { Controller, Get, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './type';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  getTodos(): Todo[] {
    return this.todosService.findAll();
  }

  @Post()
  postTodos() {
    return;
  }
}
