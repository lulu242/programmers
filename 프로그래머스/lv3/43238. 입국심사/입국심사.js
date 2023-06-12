function solution(n, times) {
    
    // times를 오름차순으로 변경한다.
    // (a-b)가 0보다 크면 순서 변경.
    times.sort((a,b) => a - b)
    
    let minTime = times[0]; // 가장 빠른 심사관의 심사 시간
    // 최대 시간.
    let maxTime = times[times.length - 1] * n; // 가장 느린시간
    
    let answer = maxTime;
    
    while(minTime <= maxTime) {
        
        let midTime = Math.floor((minTime + maxTime) / 2);
        
        let count = 0;
        
        for (let time of times) {
            count += Math.floor(midTime / time);
        }
        
        if (count >= n) {
            answer = midTime;
            //현재 값이 기준을 충족한다. 그러면 바꿔야 될까?
            maxTime = midTime - 1;
            
        } else {
            // 충족하지 않으면?
            minTime = midTime + 1;
        }
    
    }
    
    return answer;
}