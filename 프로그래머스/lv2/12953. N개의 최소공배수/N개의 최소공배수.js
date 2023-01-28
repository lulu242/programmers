function solution(arr) {
    var answer = 0;
    let max = arr.reduce((a, c)=> a*c);
    for(let i = 2; i <= max; i++){
        if(arr.filter(el=> i%el === 0).length === arr.length){
            answer = i;
            return answer;
        } 
    }
    // return answer;
}

// 다 곱하고 그 수까지 하나씩 나눴을때 나머지 0
// 필터로 나머지가 0인경우만 길이가 arr길이면 최소공배수