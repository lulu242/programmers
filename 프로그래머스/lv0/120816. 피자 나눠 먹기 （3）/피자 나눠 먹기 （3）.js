function solution(slice, n) {
    var answer = 0;
    for(let i = 1; ; i++){
        if(i*slice/n>=1){
            answer = i;
            break;
        }
    }
    return answer;
}