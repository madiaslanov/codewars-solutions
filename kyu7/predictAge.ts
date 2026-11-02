export function predictAge(age1:number, age2:number, age3:number,age4:number,age5:number,age6:number,age7:number,age8:number): number {
    const ageArray :number[] = [age1,age2,age3,age4,age5,age6,age7,age8]
    let finalSumm = 0
    for(let i = 0; i<ageArray.length; i++){
        finalSumm += Math.pow(ageArray[i], 2)
    }
    return Math.floor(Math.sqrt(finalSumm)/2)
};