const testSort = (x:number[]): number[] => {
    const size = x.length

    for(let i = 0; i < size - 1; i++){
        let minIndex = i
        for(let j = i + 1; j < size; j++){
            if(x[j] < x[minIndex]){
                minIndex = j
            }

        }
        if(minIndex !== i){
            const temp = x[i]
            x[i] = x[minIndex]
            x[minIndex] = temp
        }
        console.log(`Pass ${i + 1}:`, x)
    }

    return x 
}

testSort([5,4,6,9,1,12,10,11])