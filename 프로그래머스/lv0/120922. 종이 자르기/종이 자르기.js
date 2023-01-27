function solution(M, N) {
    var answer = 0;
    M >= N ? answer = (M)*(N-1) + M - 1: answer = (N)*(M-1) + N - 1
    
    return answer;
}

// 작은수 먼저 자르고 큰수 자르나..?