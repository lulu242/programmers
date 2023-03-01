function solution(my_string) {
    var answer = 0;
    //반목문으로 문자 돌면서 타입이 문자면 하나의 문자로 바꿈
    // 특정 문자를 기준으로 문자 나눔 
    //빈 배열을 0으로
    // 나눈 문자 더함
    
    const string = [...my_string].map(el => Number(el) >= 0 ? el: "x").join('')
    const num = string.split('x').map(el => el === ''? 0 : Number(el))
    answer = num.reduce((a,c) => a + c, 0)
    return answer;
}