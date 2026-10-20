export class Kata {
  static squareDigits(num: number): number {
    const numToStr = num.toString().split('')
    return Number(numToStr.map(item => Math.pow(Number(item),2)).join(''))
}
}