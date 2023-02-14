function solution(s) {
    var answer = 0;
    let arr = s.split(' ').map((el)=> el !== 'Z'? Number(el):el)
    for(let i = 0; i <arr.length; i++){
        arr[i] !== 'Z'? answer += arr[i] : answer -= arr[i-1]
    }
    return answer;
}

//z 앞에 숫자 빼고 더하기->만약 z면 앞에 숫자 빼기
