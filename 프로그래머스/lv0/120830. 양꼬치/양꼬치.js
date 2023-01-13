function solution(n, k) {
    var answer = 0;
    answer = n*12000 + (k-Math.floor(n/10))*2000;
    return answer;
}

//양꼬치 나누기 10의 몫이 무료음료 그 수만큼빼고 음료계산