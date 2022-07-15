import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoDto, UpdateTodoDto } from './todos.dto';
import { Todo } from './type';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Todo[]> {
    return await this.prisma.todo.findMany({
      select: {
        id: true,
        title: true,
        text: true,
        isCompleted: true,
      },
    });
  }

  async findBy(id: number): Promise<Todo> {
    return await this.prisma.todo.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        text: true,
        isCompleted: true,
      },
    });
  }

  async create(todo: CreateTodoDto) {
    await this.prisma.todo.create({
      data: {
        ...todo,
      },
    });
  }

  async update(id: number, todo: UpdateTodoDto) {
    await this.prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        ...todo,
      },
    });
  }

  async destroy(id: number) {
    await this.prisma.todo.delete({
      where: {
        id: id,
      },
    });
  }
}
