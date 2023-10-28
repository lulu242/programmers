function solution(nums) {
    let num = new Set(nums)
    if(num.size >= nums.length/2) {
        return nums.length/2
    }
    return num.size;
}
