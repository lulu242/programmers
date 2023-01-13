function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let numer3 = numer1*denom2 + numer2*denom1;
    let denom3 = denom1*denom2;
    let num = 1
    for(let i = 1; i <= denom3; i++){
        if(!(numer3%i)&&!(denom3%i)){
            num = i;
        }
    } answer = [numer3/num, denom3/num]
    return answer;
}

//분모 분자 나머지가 0이면 약분 가능