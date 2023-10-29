function solution(clothes) {
    let answer = 1;
    let type = [...new Set(clothes.map(el => el[1]))];
    let typeNumber = {}
    for(let i = 0; i < type.length; i++) {
        typeNumber[type[i]] = clothes.filter(el => el[1] === type[i]).length
    }
    for (let key in typeNumber) {
        answer *= typeNumber[key] + 1
    }
    return answer - 1;
}

