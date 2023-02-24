function solution(my_string) {
 
    let arr = my_string.split(' ')
    var answer = +arr[0]
    
    for(let i = 1; i < arr.length-1 ; i++){
        if(arr[i] === '+'){
            answer += +arr[i+1]
        } else if(arr[i] === '-'){
            answer -= +arr[i+1]
        }
    }
    return answer;
}