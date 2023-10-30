function solution(cacheSize, cities) {
    let answer = 0;
    let cache = [];
    cities = cities.map(el=>el.toLowerCase())
    for(let city of cities) {
        if(cache.includes(city)) {
            cache = cache.filter(el => el !== city)
            cache.push(city)
            answer++
        } else if(cache.length < cacheSize) {
            cache.push(city)
            answer += 5
        } else if(cacheSize > 0){
            cache.shift()
            cache.push(city)
            answer += 5
        } else {
            answer += 5
        }
        
    }
    return answer;
}
// LRU: 사용이 가장 적은 데이터부터 삭제
// 캐시에 없으면 push, shift +5
// 있으면 순서변경: 원래 위치 삭제 push +1