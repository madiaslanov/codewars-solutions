const sort = (x :number[]) :number[]=> {
    console.log([5,4,6,9,1,12,10,11])
    const lengthOfX = x.length
    let iterationCount = 0

    for(let i = 0; i < lengthOfX - 1; i ++){
        let swapped = false
        for(let j = 0; j < lengthOfX - 1 - i; j ++){
            if(x[j] > x[j+1]){
                const temp = x[j]
                x[j] = x[j+1]
                x[j+1] = temp
                swapped = true
        }
                        iterationCount++

    console.log(x);
    }
        if (!swapped){
            break
        }
    }
        console.log(iterationCount);

    return x
}

sort([5,4,6,9,1,12,10,11])