function solution(box, n) {
    var answer = 0;
    answer = box.map((el)=> Math.floor(el/n)).reduce((a, c)=> a * c);
    return answer;
}