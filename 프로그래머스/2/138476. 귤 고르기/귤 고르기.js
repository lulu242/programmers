function solution(k, tangerine) {
    let sort = {};
    for(let el of tangerine) {
     if(sort[el]) {
         sort[el] += 1;
     } else {
         sort[el] = 1;
     }
    }
    let num = Object.values(sort).sort((a,b) => b-a);
    let answer = 0;
    let total = 0;
    for(let i = 0 ; i < num.length; i++) {
        if(total < k) {
            total += num[i];
            answer++; 
        } else {
            break;
        }
    }
    return answer;
}
