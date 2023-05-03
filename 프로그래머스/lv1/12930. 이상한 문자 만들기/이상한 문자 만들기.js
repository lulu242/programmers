function solution(s) {
// 반복문으로 공백이면 스킵, 카운트 초기화
// 공백아니면 카운트 세면서 짝수면 대문자로 변환
    let answer = ''
    let count = 0
    for (const el of s) {
        if(el === " ") {
            answer += " "
            count = 0
        } else {
            answer += (count % 2 === 0 ?  el.toUpperCase() : el.toLowerCase())
            count++
        }
    }
    return answer
}