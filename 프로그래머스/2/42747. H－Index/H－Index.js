function solution(citations) {
    for(let i = citations.length; i >= 0; i--){
        if(citations.filter((el)=> el >= i).length >= i){
            return i;
        } 
    }
}

