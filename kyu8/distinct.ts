export const distinct = (a: number[]): number[] => {
  const newArray : number[] = Array.from(new Set(a)) 
    return  newArray
}
