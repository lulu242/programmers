function solution(a, b) {
    let day = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    let days = {
        1: 31,
        2: 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }
    let total = 0;
    for(let i = 1; i < a; i++) {
        total += days[i]
    }
    return day[(total + b) % 7]
}