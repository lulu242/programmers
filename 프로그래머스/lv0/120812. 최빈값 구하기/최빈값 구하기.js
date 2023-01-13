function solution(array) {
    var answer = 0;
    let obj = {}
    for(el of array){
        if(!obj[el]){
            obj[el] = 1;
        } else {
            obj[el] = obj[el] + 1;
        }
    }
    let count = 0;
    for(let pro in obj){
        if(obj[pro] > count){
            answer = pro;
            count = obj[pro]
        } else if (obj[pro] === count){
            answer = -1;
        }
    }
    return +answer;
}