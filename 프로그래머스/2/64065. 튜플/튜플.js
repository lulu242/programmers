function solution(s) {
    let answer = [];
    let arr = s.slice(2, -1).replaceAll('}','').split(',{').map(el=> el.split(','))
                .sort((a,b) => a.length-b.length)
    for(let i = 0 ; i < arr.length; i++) {
        for(let j = 0 ; j < arr[i].length; j++) {
            answer.includes(Number(arr[i][j])) ? null : answer.push(Number(arr[i][j]))
        }
    }          
    return answer;
}


// 짧은 순으로 중복은 삭제하면서 병합