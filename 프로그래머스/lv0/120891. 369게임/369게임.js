function solution(order) {
    var answer = 0;
    let arr = [...order.toString()]
    answer = arr.filter((el)=> ['3', '6', '9'].includes(el)).length
    return answer;
}