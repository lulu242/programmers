function solution(k, score) {
    let answer = [];
    let award = [];
    for(let el of score) {
        if(award.length < k){
            award.push(el);
            award.sort((a,b) => a-b);
            answer.push(award[0])
        } else if(award[0] <= el) {
            award.shift();
            award.push(el);
            award.sort((a,b) => a-b);
            answer.push(award[0])
        } else {
            answer.push(award[0])
        }
    }
    return answer;
}