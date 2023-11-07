function solution(k, dungeons) {
    let answer = 0;
    let visited = new Array(dungeons.length).fill(false); // 던전 방문 기록용
    function dfs(hp, count) {
        for(let i = 0 ; i < dungeons.length; i++) { // 모든 던전 체크
            if(!visited[i] && hp >= dungeons[i][0]) { // 던전을 방문하지 않고 피로도 충족하면
                visited[i] = true; // 던전 방문 체크
                dfs(hp - dungeons[i][1], count+1); // 피로도 소모, 방문회수 카운트 후 다음 던전 방문(방문체크한 던전 제외하고 탐색)
                visited[i] = false; // 던전 탐색을 끝냈다면 새로운 탐색을 위해 다시 방문기록초기화
            } 
        }
        answer = Math.max(answer, count) // 재귀가 끝나면 큰 방문회수로 갱신
    }
    dfs(k, 0)
    return answer;
}