function solution(sides) {
    // 마지막 변이 가장 긴 변일 경우: 두변 합 > 긴 변 > 둘중 긴변     => 합 - 긴변 -1
    // 둘중 하나가 긴변일 경우: 긴변 - 짧은 변 < 마지막변 <= 긴 변    => 긴변 - 기변 + 짧은 변
    var answer = 0;
    const min = Math.min(...sides);
    answer = 2 * min - 1
    return answer;
}