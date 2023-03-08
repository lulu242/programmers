function solution(spell, dic) {
    var answer = 0;
    dic = dic.filter(el => el.length === spell.length);
    for(let i of spell) {
        dic = dic.map(el => el.replace(i, ''));
    }
    answer = dic.includes('') ? 1 : 2;
    return answer;
    
}