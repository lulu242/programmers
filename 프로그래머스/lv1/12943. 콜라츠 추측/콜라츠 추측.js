function solution(num) {
    let count = 0
    if (num === 1) return 0
    function recursive (n) {
        if(count > 500) return -1
        count++
        if(n % 2 === 0) {
            n = n /2;
        } else {
            n = n * 3 + 1
        }
        return n === 1 ? count: recursive(n)
    }
    return recursive(num)
}