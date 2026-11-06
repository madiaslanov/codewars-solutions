const isPalindrome = (x:string) :boolean=> {
    let left = 0
    let right = x.length - 1
    for(let i = 0; i < x.length; i++){
        if(x[left] === x[right]){
            left++
            right--
        }
        else{
            return false
        }
    }
    return true
}