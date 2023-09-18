// function solution(s) {
//     let answer = [-1];
//     for (let i = 1; i < s.length; i++) {
//         let num = s.lastIndexOf(s[i], i - 1)
//         if( num !== -1) {
//             num = i - num;
//         } 
//         answer.push(num)
//     }  
//     return answer;
// }

function solution(s) {
    const hash={};
    return [...s].map((v,i)=>{
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        // hash에 없으면 -1, 있으면 현재 글자와 인덱스 차이
        hash[v] = i; // 가까운 글자와 칸 차이으므로 같은 글자가 나왔다면 새로 나온 인덱스로 갱신
        return result;
    });
}
