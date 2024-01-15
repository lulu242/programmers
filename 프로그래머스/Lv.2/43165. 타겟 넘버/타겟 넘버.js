function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;

  function dfs(count, sum) {
    if (count === length) {
      if (target === sum) {
        answer++;
      }
      return;
    }

    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
  }

  dfs(0, 0);

  return answer;
}



// numbers를 순차적으로 계산한다면 더하기와 빼기 2경우로 나뉜다 그러므로 둘다 탐색
// 최종적으로 모든 숫자를 계산했는데 target과 같다면 answer++