function solution(babbling) {
    const pattern = /^(aya|ye|woo|ma)+$/;
    var answer = 0;
    for(el of babbling){
        pattern.test(el)?answer++:null
    }
    return answer;
}