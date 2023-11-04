function solution(progresses, speeds) {
    let answer = []
    let days = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]))
    let pre = days[0]
    let count = 0
    for(let day of days) {
        if(day <= pre) {
            count++
        } else {
            pre = day
            answer.push(count)
            count = 1
        }
    }
    answer.push(count)
    return answer;
}