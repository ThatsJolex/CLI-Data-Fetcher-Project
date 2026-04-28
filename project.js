import { sumNumbers } from "./utils_sum.js";
import { fetchTodo } from "./utils_fetchToDo.js";
// get numbers from command line
const args = process.argv.slice(2);
if (args.length === 0) {
    throw new Error("Please provide numbers and a todo ID as command line arguments.");
}
// last number is todo ID
const todoId = Number(args[args.length - 1]);
if (Number.isNaN(todoId)) {
    throw new Error("The last argument must be a valid number representing the todo ID.");
}
// rest are numbers to sum
const numbers = args.slice(0, -1).map(Number);
if (numbers.some(isNaN)) {
    throw new Error("All arguments except the last one must be valid numbers.");
}
// main function
const main = async () => {
    try {
        const total = sumNumbers(numbers);
        const todo = await fetchTodo(todoId);
        console.log("Sum:", total);
        console.log("Todo Title:", todo.title);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error:", error.message);
        }
        else {
            console.error("An unknown error occured>");
        }
    }
};
main();
//# sourceMappingURL=project.js.map