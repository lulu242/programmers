function solution(array) {
    var answer = 0;
    let num = array.length/2 - 0.5;
    answer = array.sort((a,b)=> a-b)[num];
    return answer
    
}

//인데스0부터 기준으로 이하의 개수가 길이/2+0.5면 중앙값