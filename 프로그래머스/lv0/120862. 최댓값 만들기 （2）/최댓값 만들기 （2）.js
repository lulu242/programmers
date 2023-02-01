function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b)=> a-b);
    answer = numbers[0]*numbers[1] >= numbers[numbers.length-1]*numbers[numbers.length-2]?
        numbers[0]*numbers[1] : numbers[numbers.length-1]*numbers[numbers.length-2];
    return answer;
}
// -끼리 +끼리 배열 나눠서 각각 절대값큰수끼리 곱해서 그 두 수 비교