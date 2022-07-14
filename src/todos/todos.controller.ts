import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { CreateTodoDto, UpdateTodoDto } from './todos.dto';
import { TodosService } from './todos.service';
import { Todo } from './type';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  getTodos(): Todo[] {
    return this.todosService.findAll();
  }

  @Get(':id')
  getTodo(@Param('id') id: string): Todo {
    return this.todosService.findBy(id);
  }

  @Post()
  postTodos(@Body() todo: CreateTodoDto) {
    this.todosService.create(todo);
  }

  @Put(':id')
  putTodo(@Param('id') id: string, @Body() todo: UpdateTodoDto) {
    this.todosService.update(id, todo);
  }

  @Delete(':id')
  deleteTodos(@Param('id') id: string) {
    this.todosService.destroy(id);
  }
}
