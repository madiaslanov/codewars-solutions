export function descendingOrder(n: number): number {
  let result : string = ''
  result = n.toString().split('').sort((a, b) => {
  if (a === b) return 0;
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
}).join()
  return Number(result)
}