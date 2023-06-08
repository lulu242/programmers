function solution(brown, yellow) {
    var answer = [];
    for(let height = 1 ; height <= Math.sqrt(yellow) ; height++ ){
        if(yellow % height === 0) {
            const width = yellow / height
            if((height + 2) * (width + 2) === brown + yellow) return [width + 2, height + 2]
        }
    }
    return answer;
}


// 노랑 갈색 더함 48 6*8
// 노랑만 24 (6-2) * (8-2)
// 노랑 약수 +2 해서 곱한게 노랑 갈색 합이랑 같은지