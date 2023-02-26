function solution(array) {
    var answer = 0;
    let num = array.join('').split('');
    
    answer = num.filter(el=>el.includes('7')).length
    
    return answer;
}