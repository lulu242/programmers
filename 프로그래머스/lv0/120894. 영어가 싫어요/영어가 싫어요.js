function solution(numbers) {
    const number = {zero: '0', one:'1', two:2, three:'3', four:'4', five:'5', 
                    six:'6', seven:'7', eight:'8', nine:'9'};
    let num = ''
    var answer = ''
    for(let i = 0 ; i < numbers.length +1 ;i++){
        if(number[num]){
            answer += number[num]
            num = numbers[i]
        } else {
            num += numbers[i]
        }
    }
    return Number(answer);
}