import type { Todo } from "./todo.ts"
export const fetchTodo = async (id: number): Promise<Todo> => {
 const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`) //No longer Hard coded
  const data: Todo = await response.json()
  return data
}