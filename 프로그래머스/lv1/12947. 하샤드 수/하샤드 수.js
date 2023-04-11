function solution(x) {
    const num = [...String(x)].reduce((acc, cur) => acc + Number(cur), 0);
    return x % num === 0
}