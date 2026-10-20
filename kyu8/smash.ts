export function smash (words: string[]): string {
   return words.reduce((acc,curr) => acc + ' ' + curr, '').trim();
};