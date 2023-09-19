function solution(food) {
    let answer = '';
    let leftFood = food.map(el => Math.floor(el/2))
    let leftValue = [];
    for(let i = 1; i < leftFood.length; i++) {
        for(let j = 1; j <= leftFood[i]; j++) {
            leftValue.push(i)
        }
    }
    answer = leftValue.join('') + '0' + leftValue.reverse().join('') 
    return answer;
}
