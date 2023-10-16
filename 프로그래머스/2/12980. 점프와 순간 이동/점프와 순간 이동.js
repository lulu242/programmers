function solution(n)
{
    let answer = 1
    while(n>1) {
        if(n % 2 === 1) {
            n = (n-1)/2
            answer++
        } else {
            n = n/2
        }
    }
    return answer
}

