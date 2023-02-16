function solution(array, n) {
    var answer = 0;
    array.sort((a,b)=>a-b)
    let arr = array.map(el=>Math.abs(el-n))
    let min = Math.min(...arr)
    answer = array[arr.indexOf(min)]
    return answer
}