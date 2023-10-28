function solution(arr1, arr2) {
    let answer = [];
    for(let i = 0 ; i < arr1.length; i++) {
        let arr = [];
        let sum = 0;
        for(let j = 0 ; j < arr2[0].length; j++){
            arr2.forEach((el, idx) => sum += (arr1[i][idx] * el[j]))
            arr.push(sum)
            sum = 0;
        }
        answer.push(arr);
        arr = [];

    }
    return answer;
}
 
