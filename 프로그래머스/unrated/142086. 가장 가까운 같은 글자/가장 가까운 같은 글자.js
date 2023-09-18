function solution(s) {
    let answer = [-1];
    for (let i = 1; i < s.length; i++) {
        let num = s.lastIndexOf(s[i], i - 1)
        if( num !== -1) {
            num = i - num;
        } 
        answer.push(num)
    }  
    return answer;
}

