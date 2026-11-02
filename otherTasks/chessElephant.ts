const chess = (a : number,b: number,c:number,d:number) => {
    if((a > 8 || b > 8 || c > 8 || d > 8) && (a < 0 || b < 0 || c < 0 || d < 0)) return 'NO'
    else if (((a % 2 === 0 && b % 2 === 0) && (c % 2 === 1 && d % 2 === 1))) return 'YES'
    else if (((a % 2 === 1 && b % 2 === 1) && (c % 2 === 0 && d % 2 === 0))) return 'YES'
    else if (((a % 2 === 0 && b % 2 === 1) && (c % 2 === 0 && d % 2 === 1))) return 'YES'
    else if (((a % 2 === 1 && b % 2 === 0) && (c % 2 === 1 && d % 2 === 0))) return 'YES'
    else if (((a % 2 === 0 && b % 2 === 0) && (c % 2 === 0 && d % 2 === 0))) return 'YES'
    else if (((a % 2 === 1 && b % 2 === 1) && (c % 2 === 1 && d % 2 === 1))) return 'YES'
    else return 'NO'
}

chess(1,1,2,2)