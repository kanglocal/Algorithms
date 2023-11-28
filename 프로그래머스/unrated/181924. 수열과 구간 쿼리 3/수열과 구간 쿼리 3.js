function solution(arr, queries) {
    
    for(let query of queries){
        let s = arr[query[0]];
        let e = arr[query[1]];
        arr.splice(query[0], 1, e);
        arr.splice(query[1], 1, s);
    }
    
    return arr;
}