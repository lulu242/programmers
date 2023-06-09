function solution(n, arr1, arr2) {
    var answer = [];
    let result =''
    arr1 = arr1.map(el => el.toString(2).padStart(n ,'0'))
    arr2 = arr2.map(el => el.toString(2).padStart(n, '0'))
    
    for(let i = 0; i < n; i++ ){
        for(let j = 0; j < n; j++ ){
            if(arr1[i][j] === '0' && arr2[i][j] === '0') {
                result += ' '
            } else {result += '#'}
            if(j === n -1) {
                answer.push(result)
                result = ''
            }
        }
    }
    return answer;
}

// 이진법으로 변경
// 만약 둘다 0이면 공백 아니면 #
