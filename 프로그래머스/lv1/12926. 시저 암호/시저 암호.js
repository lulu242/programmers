function solution(s, n) {
    var answer = '';
    const AZ = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const az = AZ.map(el => el.toLowerCase());
    let idx = -1
    let idx2 = -1
    for(i of s) {
        idx = AZ.indexOf(i)
        idx2 = az.indexOf(i)
        if(idx > -1) {
            answer += AZ[(idx + n) % 26]
        } else if (idx2 > -1){
            answer += az[(idx2 + n) % 26]
        } else {
            answer += " "
        }
    }
    return answer;
}