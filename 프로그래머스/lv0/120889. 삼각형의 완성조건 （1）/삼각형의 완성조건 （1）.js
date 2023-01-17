function solution(sides) {
    var answer = 0;
    let long = sides.reduce((acc, cur)=> acc < cur? acc = cur: acc);
    sides[0] + sides[1] + sides[2] - long > long ? answer = 1: answer = 2;
    return answer;
}

// 길이가 긴것 reduce
// 총길이합 - 긴길이 > 긴길이