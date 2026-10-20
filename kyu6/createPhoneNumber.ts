export function createPhoneNumber(numbers: number[]): string {
  const firstGroup = numbers.slice(0,3).join("")
  const secondGroup = numbers.slice(3,6).join("")
  const thirdGroup = numbers.slice(6,10).join("")
  return `(${firstGroup}) ${secondGroup}-${thirdGroup}`
}