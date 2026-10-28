export function checkExam(array1: string[], array2: string[]): number {
    let finalSum: number= 0
    for(let i = 0; i < array1.length; i++){
            if (array2[i] === '') finalSum+= 0 
            else if(array1[i] === array2[i]) finalSum += 4
            else if (array1[i] !== array2[i]) --finalSum 
        }
    if(finalSum < 0) finalSum = 0
    return finalSum
}