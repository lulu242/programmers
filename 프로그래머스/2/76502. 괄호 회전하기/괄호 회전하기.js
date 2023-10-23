function solution(s) {
    let answer = 0;
    let bracket = {"(":")", "[":"]", "{":"}"};
    
    function isRight(str) {
        let copy = [];
        for(let el of str) {
            if(bracket[el]) {
                copy.push(el);
            } else if(el === bracket[copy[copy.length-1]]) {
                copy.pop()
            } else {return false}
        }
        return copy.length === 0
    }

    for(let i = 0; i < s.length; i++ ) {
        s = s.slice(1) + s[0];
        if(isRight(s)) {
            answer++
        }
    }
    return answer;
}