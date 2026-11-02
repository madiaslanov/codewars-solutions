export function peopleWithAgeDrink(old: number): string {
  if(old <= 13) return "drink toddy"
  else if(old < 18) return "drink coke"
  else if(old < 21) return "drink beer"
  else return "drink whisky"
}
