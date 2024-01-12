function solution(phone_book) {
    var answer = true;
    phone_book.sort()
    console.log(phone_book)
    for(let i = 0; i < phone_book.length - 1; i++) {
        
        if(phone_book[i+1].startsWith(phone_book[i])) {
                return answer = false
        }
    }
    
    return answer;
}

//짧은 순으로 정렬
// 앞에서부터 포함된게 있는지 확인