import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from './todos.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos() {
    return this.todosService.findAll();
  }

  @Get(':id')
  getTodo(@Param('id', ParseIntPipe) id: number) {
    return this.todosService.findBy(id);
  }

  @Post()
  postTodos(@Body() todo: CreateTodoDto) {
    this.todosService.create(todo);
  }

  @Put(':id')
  putTodo(@Param('id', ParseIntPipe) id: number, @Body() todo: UpdateTodoDto) {
    this.todosService.update(id, todo);
  }

  @Delete(':id')
  deleteTodos(@Param('id', ParseIntPipe) id: number) {
    this.todosService.destroy(id);
  }
}
