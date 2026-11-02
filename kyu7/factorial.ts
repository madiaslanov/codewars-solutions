export function factorial(n: number) {
  let finalResult = 0
  let count = n
    for(let i = 0; i < n; i++){  
        finalResult *= count
        --count
  }
  return finalResult
}