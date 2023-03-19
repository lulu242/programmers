function solution(n) {
    // 반복 세는 변수 
    // 반복문으로 3들어가면 패스 아니면 세기
    var answer = 0;
    let count =0;
    for(let i = 0; count < n; i++) {
        if(i % 3 !== 0 && !String(i).includes('3')) {
            count++;
            answer = i;
        }
    }
    return answer;
}