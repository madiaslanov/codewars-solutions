export const stockList = (listOfArt:string[], listOfCat:string[]):string => {
  let finalResult = []
  for(const item of listOfCat){
    let resultOfPlus :number = 0
    let sum :number = 0
    if(listOfArt.length === 0 || listOfCat.length === 0){
        return ''
      }
    for (const j of listOfArt){
      
      if(item !== j[0]){
        continue
      }
      if(item === j[0]){
        resultOfPlus = Number(j.split(' ')[1])
        sum += resultOfPlus
      } 
    }
    finalResult.push(sum)
  }
  let res = []
  for(let j = 0; j < listOfCat.length; j++){
    res.push(`(${listOfCat[j]} : ${finalResult[j]})`)
  }
  return res.join(" - ")
}