export function isIsogram(str: string): boolean{
  const devotedStr: string[]= str.toLowerCase().split('')
  const finalStr : string[] = Array.from(new Set(devotedStr))
  if(finalStr.length !== devotedStr.length) return false
  if(finalStr.length === devotedStr.length) return true
  return false
}