const countOccurrences = (x:string[]): number => {
    const result: Record<string,number> = {} 
    
     for(let number of x){
        if(!result[number]){
            result[number] = 1
        }
        else{
            result[number]++
        }
    }
    const entries = Object.entries(result);
    let maxCount = 0;
    let mostFrequent = 0;
    for (const [key, value] of entries) {
    if(value > maxCount){
        maxCount = value
        mostFrequent = Number(key)
    }
    }
    return mostFrequent
}