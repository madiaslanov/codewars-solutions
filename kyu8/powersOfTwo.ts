export function powersOfTwo(n:number):number[]{
  let finalArray = []
  if(n <= 0) return [1]
  finalArray.push(1)
   let count = 1
   for(let i = 0; i < n; i++){
    finalArray.push(count*=2)
   }
    return finalArray;
}