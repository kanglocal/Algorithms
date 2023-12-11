function solution(arr) {
    const arrLength = 2 ** Math.ceil(Math.log2(arr.length));
    
    return([...arr, ...new Array(arrLength - arr.length).fill(0)]);
}