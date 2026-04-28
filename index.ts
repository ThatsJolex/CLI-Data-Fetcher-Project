import { fetchTodo } from "./utils_fetchToDo.js"
import { DataProcessor } from "./DataProcessor.js"

const args: string[] = process.argv.slice(2)

const todoId: number = Number (args[args.length-1]) 
const numbers: number[] = args.slice(0,-1).map(Number)

const main = async(): Promise<void> => {
    try{
        const processor = new DataProcessor()

        const total = processor.sum(numbers)
        const todo = await fetchTodo(todoId)

        processor.printResult(total, todo.title)
    }catch(error: unknown){
        console.error("Error: ", error)
    }
}