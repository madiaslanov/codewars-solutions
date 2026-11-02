export const mxdiflg = (a1:string[], a2:string[]): number => {
  if(a1.length === 0 || a2.length === 0) return -1
  let firstFinal: number[] = []
  let secondFinal: number[] = []
  for(let i = 0; i < a1.length; i++){
    firstFinal.push(a1[i].length)
  }
  for(let i = 0; i < a2.length; i++){
    secondFinal.push(a2[i].length)
  }
  firstFinal.sort((a,b) => a-b)
  secondFinal.sort((a,b) => b-a)
  return Math.abs(Math.max(...firstFinal) - Math.min(...secondFinal)) >= Math.abs(Math.max(...secondFinal) - Math.min(...firstFinal)) ? Math.abs(Math.max(...firstFinal) - Math.min(...secondFinal)) : Math.abs(Math.max(...secondFinal) - Math.min(...firstFinal))
}