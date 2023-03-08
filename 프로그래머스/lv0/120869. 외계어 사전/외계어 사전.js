function solution(spell, dic) {
    // dic 중에서 정렬했을 때 spell 정렬한 값이랑 같은게 있다면 1 없다면 2 
    return dic.some(el => [...el].sort().toString() === spell.sort().toString()) ? 1 : 2
}