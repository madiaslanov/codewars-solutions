export function evaporator(content: number, evapPerDay: number, threshold: number): number {
    let day :number = 0
    let finalThreshold:number = 0
    let finalContent = content
    while((content * (threshold * 0.01)) > finalThreshold){
        finalContent = finalContent * (1 - evapPerDay * 0.01)
        ++day
    }
    return day
}