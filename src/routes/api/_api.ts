// This file will be ignored by svelte and is basically used for implementing functionality
import type { Request } from '@sveltejs/kit';
let todos: Array<Todo> = [];

export const api = (request: Request, todo?: Todo) => {
    switch(request.method.toUpperCase()){
        case "GET":
            return {
                body: todos,
                status: 200,
            }
        case "POST":
            todos.push(todo);
            return {
                status: 303,
                headers: {
                    location: "/"
                },
                body: todo,
            }
        case "DELETE":
            todos = todos.filter(todo => todo.id !== request.params.id);
            return {
                status: 303,
                headers: {
                    location: "/"
                }
            }
        default:
            return {
                status: 500,
            }
    }
}