function solution(sizes) {
    const arr = sizes.map(el=>el[0]>el[1] ? el : [el[1], el[0]])
    const width = Math.max(...arr.map(el => el[0]))
    const length = Math.max(...arr.map(el => el[1]))
    return width * length
}
// 긴거 가로로 짧은건 세로로
// 가로에서 젤 긴거 세로에서 제일 긴거

