function solution(my_string) {
    var answer = [];
    for(i of my_string){
        +i >= 0 ? answer.push(+i): answer;
    }
    return answer.sort((a,b)=>a-b);
}