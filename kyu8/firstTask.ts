
export function squareSum(numbers: number[]): number {
    let sum = 0;
    numbers.forEach(value => {
        sum += value * value;
    });
    return sum;
}