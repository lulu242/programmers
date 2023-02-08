function solution(score) {
    var answer = [];
    
    let average = score.map((el, idx)=> {return [idx, (el[0]+el[1])/2]})
    let 내림차순 = average.sort((a, b)=> b[1] - a[1])
    let a = 내림차순.map(el=>el[1])
    
    let num = 0 // 순위 기준
    let 순위 = 내림차순.map((el, idx)=> {
        if(el[1] === a[idx-1]){
           return [el[0], num] 
        } else{
            num = idx + 1
            return [el[0], num]            
        }
    })
    
    let 원래순서 = 순위.sort((a, b)=> a[0] - b[0])
    
    answer = 원래순서.map(el=>el[1])
    
    return answer;
}
