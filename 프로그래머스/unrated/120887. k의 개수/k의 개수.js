function solution(i, j, k) {
    let strNums = '';
    
    for(let num = i; num <= j; num++){
        strNums += num;
    }
    
    return strNums.split(k + '').length - 1;
}