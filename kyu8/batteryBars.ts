export function batteryBars(percent: number): string {
  if(percent === 100){
    return '[#####]'
  }
    if(percent < 100 && percent > 80){
    return '[####.]'
  }
  if(percent < 80 && percent > 60){
    return '[###..]'
  }
  if(percent <60 && percent > 40){
    return '[##...]'
  }
  if(percent <40 && percent > 20){
    return '[#....]'
  }
  else return '[.....]'
}