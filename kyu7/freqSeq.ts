const count: Record<string, number> = {};
export function freqSeq(str: string, sep: string): string {
  let newStr = ""
  for (const char of str) {
    for ( const letter of char){
      count[letter] = (count[letter] || 0) + 1;
    }
    newStr += count[char] + sep
}
  return newStr.slice(0, -1)
}

//TODO