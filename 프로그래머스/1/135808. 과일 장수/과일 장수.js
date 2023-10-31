function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b)=>b-a)
    // while(score.length >= m){
    //     answer += score[m-1]*m
    //     score = score.slice(m)
    // }
    for(let i = m-1; i < score.length; i += m) {
        answer += score[i] * m
    }
    return answer;
}
