function solution(dots) {
    var answer = 0;
    let [a, b, c, d] = dots;
    a[0] !== b[0] && a[1] !== b[1]?  answer = Math.abs(a[0] - b[0]) * Math.abs(a[1] - b[1]):false;
    a[0] !== c[0] && a[1] !== c[1]?  answer = Math.abs(a[0] - c[0]) * Math.abs(a[1] - c[1]):false;
    a[0] !== d[0] && a[1] !== d[1]?  answer = Math.abs(a[0] - d[0]) * Math.abs(a[1] - d[1]):false;
    return answer;
}