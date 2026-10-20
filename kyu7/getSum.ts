export function getSum(a: number, b: number): number {
 let finalSumm: number = 0
 if(a === b){
   return a
 }
 if(b >= a){
   while(a <= b){
     finalSumm += a
     a+=1
   }
 }
 else if(b <= a){
   while(b <= a){
     finalSumm += b
     b+=1
   }
 }
  
  return finalSumm
}
