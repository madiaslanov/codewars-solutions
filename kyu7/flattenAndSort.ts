export function flattenAndSort(inputArray: number[][]): number[] {
    let finalArray :number[] = []
    for(let i of inputArray){
        for(let j of i)
            finalArray.push(j)
    }
    return finalArray.sort((a,b) => a - b)
}
