export function maxMultiple(divisor: number, bound: number): number {
    let newBound = bound
    for(let i = 0; i < bound; i++){
    if(newBound % divisor === 0){
        return newBound
    } 
    --newBound
  }
  return newBound
}