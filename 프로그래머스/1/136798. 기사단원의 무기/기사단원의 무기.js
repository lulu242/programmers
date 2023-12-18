function solution(number, limit, power) {
    let answer = Array(number).fill(0)
                                .map((_, i) => countDivisors(i+1) <= limit ? countDivisors(i+1) : power )
                                .reduce((acc, cur) => acc + cur)
    return answer
}

function countDivisors(number) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      count++;
      if (i !== number / i) {
        count++;
      }
    }
  }
  return count;
}
