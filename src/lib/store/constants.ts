import type { Todo } from "./store.schema";

export const STORE_DEFAULT_TODOS: Todo[] = [
    {
        id: '1234a',
        content: 'This is just a test content',
        isDone: false,
    },
    {
        id: '1234b',
        content: 'This is just another test content',
        isDone: false,
    }
];

