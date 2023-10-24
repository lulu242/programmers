function solution(want, number, discount) {
    let answer = 0;
    
    for(let i = 0; i < discount.length;i++){
        let isPossible = false;
        let discountPeriod = discount.slice(i, i+10)
        for(let j = 0 ; j < want.length; j++) {
            if(discountPeriod.map(d => d === want[j]? d = 1 :d = 0 ).reduce((a, c)=> a + c, 0) >= number[j]) {
                isPossible = true;
            } else {
                isPossible = false;
                break
            }
        }
        if(isPossible) answer++
        }
    return answer;
}
