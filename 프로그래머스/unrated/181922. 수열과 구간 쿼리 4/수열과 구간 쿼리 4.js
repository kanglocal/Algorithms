function solution(arr, queries) {
    var answer = [];
    
    for(let query of queries){
        for(let i = 0; i < arr.length; i++){
            if(query[0] <= i && i <= query[1] && i%query[2] === 0){
                arr[i]++;
            }
        }
    }
    
    return arr;
}