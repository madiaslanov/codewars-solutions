export function number(array: string[]): string[]{
  let finalArray = []
  let counter = 1
    for(let i = 0; i < array.length; i++){
    finalArray.push(`${counter}: ` + array[i] )
    counter++
  }
  return finalArray
}