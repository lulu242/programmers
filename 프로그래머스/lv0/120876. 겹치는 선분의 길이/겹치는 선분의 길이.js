function solution(lines) {
    var answer = 0;
    // 0으로 채워진 길이 200 배열 
    let line = new Array(200);
    line.fill(0);
    // 배열 인덱스를 기준으로 선분에 있는 값이면 +1
    for(let i = 0; i < 3 ; i++){
        for(let j = lines[i][0]; j < lines[i][1]; j++){
            line[j + 100] += 1;
        }
    }
    answer = line.filter((el)=> el >= 2).length;
    return answer;
}


