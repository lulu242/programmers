function solution(money) {
    var answer = [];
    let n = Math.floor(money / 5500);
    let mon = money - n * 5500;
    answer = [n, mon]
    return answer;
}