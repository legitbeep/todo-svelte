import type { RequestHandler } from "@sveltejs/kit";

let todos: Array<Todo> = [];

export const get: RequestHandler = () => {
    return {
        body: todos,
        status: 200,
    }
}

export const post:RequestHandler<{}, FormData> = (request) => {
    todos.push({ text: request.body.get("todo"), done: false, created_at: new Date()});
    return {
        status: 303,
        headers: {
            location: "/"
        },
    }
}