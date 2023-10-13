function solution(n,a,b)
{
 let count = 0;
 while (Math.abs(b - a) !== 1 || Math.round(a / 2) !== Math.round(b / 2)) {
     a = Math.round(a / 2);
     b = Math.round(b / 2);
     count++
 }
    return count + 1;
}