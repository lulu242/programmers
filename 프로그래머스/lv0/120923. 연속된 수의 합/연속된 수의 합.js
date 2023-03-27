function solution(num, total) {
// a=첫 숫자 b=마지막 숫자 num = b-a+1
// (a+b)(b-a+1)/2 = total
// (a+b)num = 2*total
// a+b = 2*total/num
// a + num + a -1 = 2*total/num
// a = (2*total/num + 1 - num)/2
    
const a = (2 * total / num + 1 - num) / 2;
// 가장 작은 a부터 1씩 더해줌
return Array(num).fill().map((_, i) => i + a)
}
   
