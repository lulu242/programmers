function solution(s) {
    let arr = [...s];
    let arr2 = []
    let count0 = 0
    let count = 0
    while(arr.length > 1) {
        arr2 = arr.filter(el => el === "1")
        count0 += (arr.length - arr2.length)
        arr = [...(arr2.length.toString(2))]
        count++
    }
    return [count, count0]
}