export function inArray(a1: string[], a2: string[]): string[] {
 let finalArray :string[] = []
  for(const item of a1){
    for (const j of a2){
      if (j.includes(item)){
        finalArray.push(item)
        break
      }
    }
  }
  return finalArray.sort((a,b) => {
    if(a < b){
      return -1
    }
    if(a > b){
      return 1
    }
    return 0
  })
}