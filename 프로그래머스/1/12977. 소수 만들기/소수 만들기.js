function solution(nums) {
    let answer = 0, number=0;
    for(let i=0;i<nums.length-2;i++){
        for(let j=i+1;j<nums.length-1;j++){
            for(let l=j+1;l<nums.length;l++){
                number=nums[i]+nums[j]+nums[l];
                let count=0;
                for(let k=1;k<=number;k++){
                    if(number%k==0) count++;
                }
                if(count==2) answer++;
            }
        }
    }
    return answer;
}