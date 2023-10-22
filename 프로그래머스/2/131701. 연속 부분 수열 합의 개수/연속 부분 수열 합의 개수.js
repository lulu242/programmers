function solution(elements) {
    let answer = [];
    let circle = [...elements, ...elements];
    for(let i = 1 ; i <= elements.length; i++) {
        for(let j = 0; j < elements.length; j++) {
            answer.push(circle.slice(j, j+i).reduce((acc, cur) => acc + cur));
        }
    }
    return [...new Set(answer)].length;
}
