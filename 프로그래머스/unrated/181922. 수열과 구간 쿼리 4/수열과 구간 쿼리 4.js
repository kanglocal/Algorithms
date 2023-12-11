function solution(arr, queries) {
    var answer = [];
    
    for(let [s, e, k] of queries){
        for(let i = 0; i < arr.length; i++){
            if(s <= i && i <= e && i%k === 0){
                arr[i]++;
            }
        }
    }
    
    return arr;
}