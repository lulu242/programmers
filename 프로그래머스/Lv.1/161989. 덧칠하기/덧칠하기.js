function solution(n, m, section) {
    let answer = 0;
    let nextPart = 0;
    section.forEach((part, idx) => {
        if(idx === nextPart) {
            answer++
            const paintEnd = part + m - 1
            nextPart =  section.findIndex(el => el > paintEnd)            
        }
    })
    return answer;
}

// 칠할 곳 만나면 m만큼 칠하기
// 칠해진 곳 제외
// 순서대로 반복