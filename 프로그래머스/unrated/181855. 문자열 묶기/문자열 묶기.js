function solution(strArr) {
    var answer = 0;
    
    const countMap = new Map();
    for( let str of strArr){
        countMap.set(str.length, (countMap.get(str.length) || 0) +1);
    }
    
    return Math.max(...countMap.values());
}