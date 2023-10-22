function solution(elements) {
    let answer = new Set();
    let circle = [...elements, ...elements];
    for(let i = 1 ; i <= elements.length; i++) {
        for(let j = 0; j < elements.length; j++) {
            answer.add(circle.slice(j, j+i).reduce((acc, cur) => acc + cur));
        }
    }
    return answer.size
}
