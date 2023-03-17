function solution(a, b) {
    // 약분하기
    const min =  Math.min(a, b);
    for(let i = 2 ; i <= min; i++) {
       if(a % i === 0 && b %i === 0) {
           a = a / i;
           b = b / i;
       } 
    }
    // brk 2,5인지 판단
    while (b > 1) {
        if(b % 2 === 0) {
            b= b / 2;
        } else if(b % 5 === 0) {
            b = b / 5
        } else return 2
    }
    
    return b === 1 ? 1 : 2
}