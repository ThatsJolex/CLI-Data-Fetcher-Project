export class DataProcessor{
    sum(numbers: number[]): number{
        return numbers.reduce((acc, num) => acc + num,0)
    }
    printResult(total: number, title: string): void{
        console.log('Sum: ${total}')
        console.log("Todo Title: ${title}")
    }

}