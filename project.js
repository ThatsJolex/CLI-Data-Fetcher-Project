import { sumNumbers } from "./utils_sum.js"
import { fetchTodo } from "./utils_fetchTodo.js"

// get numbers from command line
const args = process.argv.slice(2)
// last number is todo ID
const todoId = args[args.length - 1]
// rest are numbers to sum
const numbers = args.slice(0, -1).map(Number)

// main function
const main = async () => {
  try {
    const total = sumNumbers(numbers)

    const todo = await fetchTodo(todoId)

    console.log("Sum:", total)
    console.log("Todo Title:", todo.title)

  } catch (error) {
    console.log("Error:", error)
  }
}

main()