function solution(dots) {
    // 기울기가 같으면 평행 경우의 수 3가지 
    function inclination(arr1, arr2) {
        return (arr1[1] - arr2[1])/(arr1[0] - arr2[0])
    }
    // 0과 1
    if(inclination(dots[0], dots[1]) === inclination(dots[2], dots[3])) return 1
    // 0과 2
    if(inclination(dots[0], dots[2]) === inclination(dots[1], dots[3])) return 1
    // 0과 3
    if(inclination(dots[0], dots[3]) === inclination(dots[1], dots[2])) return 1

    return 0;
}