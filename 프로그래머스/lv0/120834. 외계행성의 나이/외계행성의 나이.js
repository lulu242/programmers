function solution(age) {
    var answer = '';
    let str = age.toString();
    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    for(i of str){
        answer += abc[+i];
    }
    
    return answer;
}