// This file will be ignored by svelte and is basically used for implementing functionality
import type { Request } from '@sveltejs/kit';
import PrismaClient from '$lib/prisma';

const prisma = new PrismaClient() ;

export const api = async (request: Request, data?: Record<string, unknown>) => {
    let body = {};
    let status = 500;
  
    switch (request.method.toUpperCase()) {
      case "GET":
        body = prisma.todo.findMany();
        status = 200;
        break;
      case "POST":
        //todos.push(data as Todo);
        body = await prisma.todo.create({
          data: {
            created_at: data.created_at as Date,
            done: data.done as boolean,
            text: data.text as string,
          }
        });
        status = 201;
        break;
      case "DELETE":
        //todos = todos.filter(todo => todo.id !== request.params.id)
        body = await prisma.todo.delete({
          where: {
            id: request.params.id
          }
        });
        status = 200;
        break;
      case "PATCH":
        // let newTodo :Todo;
        // todos = todos.map(todo => {
        //   if (todo.id === request.params.id) {
        //     if (data.text) todo.text = data.text as string;
        //     else todo.done = data.done as boolean;
        //     newTodo = todo;
        //   }
        //   return todo;
        // });
        body = await prisma.todo.update({
          where: {
            id: request.params.id
          },
          data: {
            done: data.done as boolean,
            text: data.text as string
          }
        });
        status = 200;
        break;
    
      default:
        break;
    }

    // It only redirects if browsers sends the request
    // browser doesnt add headers by default
    if (request.method.toUpperCase() !== "GET" &&
    request.headers.accept !== "application/json") {
      return {
        status: 303,
        headers: {
          location: "/"
        }
      };
    }
  
    return {
      status,
      body
    }
  }