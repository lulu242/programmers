function solution(numlist, n) {
    // 오름차순 정렬 -> n 보다 크거나 같은거랑 작은거 분류 두배열 비교하면서 새배열에 답 담기
    var answer = [];
    numlist.sort((a, b) => a -b)
    const idx = numlist.findIndex(el => el >= n);
    const before = numlist.slice(0, idx).sort((a, b) => b- a)
    const after = numlist.slice(idx)
    while (before.length > 0 || after.length > 0) {
        if(before.length === 0) {
            return [...answer, ...after]
        }
        if(after.length === 0) {
            return [...answer, ...before]
        }
        if (n - before[0] >= after[0] - n) {
            answer.push(after.shift())
        } else {answer.push(before.shift())}
    }
    return answer;
}