const isAnagram = (a:string, s:string) :boolean=> {
    const result1 : Record<string,number> = {}
    const result2 : Record<string,number> = {}
    const firstArray = a.split('')
    const secondArray = s.split('')
    if(firstArray.length !== secondArray.length) return false
    for(let i of firstArray)
        if(!result1[i]){
            result1[i] = 1
        } 
        else{
            result1[i] ++
        }
    for(let i of secondArray)
        if(!result2[i]){
            result2[i] = 1
        } 
        else{
            result2[i] ++
        }
    const firstKeys = Object.keys(result1)
    for(let i of firstKeys){
        if(result1[i] !== result2[i]) return false
    }
        return true
    }