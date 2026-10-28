    export function sortVowels(str?: number | string | null): string {
        if (typeof str !== 'string') {
        return ''
        }
        const vowels = 'aeiouAEIOU'
        const lengthOfStr = str?.length
        let newWord : string[] = []
        for(let i=0; i < lengthOfStr; i++){
            if(vowels.includes(str[i])){
                newWord.push('|' + str[i] + '\n')
            }
            else newWord.push(str[i] + '|' + '\n')

            }
        return newWord.join('').slice(0,-1)
    };