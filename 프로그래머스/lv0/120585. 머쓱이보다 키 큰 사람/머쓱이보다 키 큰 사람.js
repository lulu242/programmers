function solution(array, height) {
    var answer = 0;
    for(el of array){
        if(el > height){
            answer ++
        }
    }
    return answer;
}