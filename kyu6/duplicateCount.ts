export function duplicateCount(text: string): number{
  const newText = text.toLowerCase().split('')
  const clearArr = Array.from(new Set(newText))
  let finalSum = 0;
  let result = newText.filter(Element =>  clearArr.includes(Element))
  return finalSum
}