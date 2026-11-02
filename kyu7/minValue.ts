export const minValue = (values: number[]): number => {
    const sortedArray :number[] = [...new Set(values.sort((a,b) =>  {
        if(a === b) return 0
        else if(a < b) return -1
        else if(a > b) return 1
        return 0
    }
    ))]
    return Number(sortedArray.join(''))
};