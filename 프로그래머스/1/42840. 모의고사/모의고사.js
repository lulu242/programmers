function solution(answers) {
    let score = [0, 0, 0];
    let answer1 = [1, 2, 3, 4, 5];
    let answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === answer1[i % answer1.length]) {
            score[0] += 1
        }
        if(answers[i] === answer2[i % answer2.length]) {
            score[1] += 1
        }
        if(answers[i] === answer3[i % answer3.length]) {
            score[2] += 1
        }
    }
    console.log(Math.max(...score))
    return score.map((el, idx)=> Math.max(...score) === el ? idx+=1 : null).filter(el=> el)
}
