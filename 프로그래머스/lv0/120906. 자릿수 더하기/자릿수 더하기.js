function solution(n) {
    var answer = 0;
    let str = n.toString();
    answer = [...str].reduce((acc,cur)=> acc + +cur,0);
    return answer;
}