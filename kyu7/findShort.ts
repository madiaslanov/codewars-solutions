export function findShort(s: string): number {
  const newString : string[] = s.split('')
  const finalArray : number[] = []
  for (let i = 0; i < newString.length; i++){
    finalArray.push(newString[i].length)
  }
  return finalArray.sort((a,b) => {
    if (a < b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
    return -1;
    })[0]
}