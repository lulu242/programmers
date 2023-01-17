function solution(numbers) {
    var answer = 0;
    let arr = numbers.sort((a,b)=> b-a);
    answer = arr[0] * arr[1];
    return answer;
}
// 내림차순 정렬 인덱스0과1곱함