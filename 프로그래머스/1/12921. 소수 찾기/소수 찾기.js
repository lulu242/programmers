// function solution(n) {
//     var answer = 0;
//     if(n === 2) return 1;
//     for(let i = 3 ; i <= n; i+=2) {
//         for(let j = 2; j <= Math.sqrt(i); j++) {
//             if(i % j === 0) break;
//             if(Math.sqrt(i) < j+1) answer++;
//         }
//     }
//     return answer + 2;
// }
function solution(nums) {
    const prime = new Array(nums+1).fill(1);
    let count = nums-1;
    for (let i=2; i<Math.sqrt(nums); i++)
        if (prime[i])
            for (let j=i**2; j<=nums; j+=i)
                if (prime[j]) count--, prime[j]=0;
    return count;
}