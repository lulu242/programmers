function solution(hp) {
    var answer = 0;
    let a = parseInt(hp/5);
    let b = parseInt(hp%5 / 3)
    let c = hp%5%3
    answer = a + b + c;
    return answer;
}
// 5, 3, 1 공격력
// 큰 수부터 최대한 넣기