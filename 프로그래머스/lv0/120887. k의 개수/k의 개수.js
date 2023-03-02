function solution(i, j, k) {
    var answer = 0;
    // 반복문으로 하나씩 세기
    for(i;i <= j; i++){
       answer = answer + [...String(i)].filter(el=>el===String(k)).length
    }
    
    return answer;
}