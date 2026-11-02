export const longest = (s1:string, s2:string): string => {
  const finalView = s1+s2
  const finalArray = Array.from(new Set(finalView)).sort((a,b) => {
    if (a === b) return 0
    else if(a < b) return 1
    else if(a > b) return -1
    return 0
  })
  return finalArray.join('')
}