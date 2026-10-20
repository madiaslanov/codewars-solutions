export function repeatStr(n: number, s: string): string {
  let newWord : string = '' 
  for(let i = 0; i < n; i++){
    newWord += s
  }
  return newWord
}