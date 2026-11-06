const selectionSort = (x :number[]) :number[] => {
    const lengthOfX = x.length
    for(let i = 0; i < lengthOfX - 1; i++){
        let minIndex = i;
        console.log('min index',minIndex);
        
        for(let j = i +1; j < lengthOfX; j++){
            if(x[j] < x[minIndex]){
                minIndex = j
            }
            console.log('iteration inside',x);
            
        }
        if(minIndex !== i){
            let temp = x[i];
            x[i] = x[minIndex]
            x[minIndex] = temp
        }
        console.log('iteration ouside',x);
    }
    
    return x
}

selectionSort([5,4,6,9,1,12,10,11])