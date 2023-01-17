function solution(s1, s2) {
    var answer = 0;
    for(el of s1){
        s2.includes(el)? answer += 1: answer;
    }
    return answer;
}
// s1 요소가 s2에 있는지 확인 있다면 +1