function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    for(let el of goal) {
        if(el === cards1[0]) {
            cards1.shift()
        } else if ( el === cards2[0]) {
            cards2.shift()
        } else {
            answer = "No"
            break;
        }
    }
    return answer;
}