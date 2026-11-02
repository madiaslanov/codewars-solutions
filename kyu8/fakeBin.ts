export const fakeBin = (x:string):string => {
  const newString : string[] = x.split('')
  const finalResult : number[] = []
    for(let i=0; i < newString.length; i++){
        if(Number(newString[i]) < 5){
            finalResult.push(0)
        }
        else if(Number(newString[i]) >= 5){
            finalResult.push(1)
        }
    }
    return finalResult.join('')
};