function solution(nums) {
    var answer = 0;
    
    const kindCnt = new Set(nums).size;
    const maxCnt = nums.length / 2;
    
    if(kindCnt < maxCnt){
        answer = kindCnt;
    }else{
        answer = maxCnt;
    }
    
    return answer;
}