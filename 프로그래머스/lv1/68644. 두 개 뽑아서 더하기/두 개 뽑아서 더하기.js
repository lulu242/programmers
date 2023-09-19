function solution(numbers) {
    let dupAnswer = [];
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            dupAnswer.push(numbers[i] + numbers[j]);
        }
    }
    let set = new Set(dupAnswer);
    let answer = [...set].sort((a, b) => a - b);
    return answer;
}

// 모두탐색 -> 중복제거 및 정렬