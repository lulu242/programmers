function solution(dot) {
    //인덱스0 양수면서 인데스1도 양수면1 아니면 4
    //아니면 인덱스1 양수면 2 아니면 3
    var answer = 0;
    if(dot[0] > 0){
        if(dot[1] > 0){
            answer = 1
        } else {
            answer = 4
        }
    } else{
         if(dot[1] > 0){
            answer = 2
        } else {
            answer = 3
        }
    }
    
    return answer;
}