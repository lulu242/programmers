function solution(A, B) {
    // 한 칸씩 이동해서 같으면 반환
    var answer = 0;
    for(let i = 0; i < A.length ; i++) {
        if(A === B) return answer
        if(answer === A.length -1) return -1
        B = B.slice(1) + B[0];
        answer++
    }
    return answer;
}