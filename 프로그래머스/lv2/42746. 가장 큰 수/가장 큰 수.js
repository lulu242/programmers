function solution(numbers) {
    numbers = numbers.map(el => el.toString())
    let answer = numbers.sort((a, b) => (b + a) - (a + b)).join('')
    return answer[0] === '0' ? '0' : answer
}

// sort는 a-b가 양수면(a가 더 크면) a와 b의 위치를 바꾼다(작은 수를 앞으로)
// 반대 b-a가 양수면(b가 더 크면) a와 b의 위치를 바꾼다(큰 수를 앞으로)
// ba가 ab보다 크면 a와 b의 위치를 바꾼다
