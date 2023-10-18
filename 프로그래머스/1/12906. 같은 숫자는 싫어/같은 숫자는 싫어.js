function solution(arr)
{
    let answer = [];
    
    // 처음 값은 answer에 바로 넣는다.
    answer.push(arr[0]);
    
    // 앞 숫자와 뒷 숫자를 비교해서 다르면 뒷 숫자를 answer에 push한다.
    for(let i = 0; i < arr.length - 1; i ++){
        if(arr[i] !== arr[i+1] ){
            answer.push(arr[i+1]);
        }
    }
    
    return answer;
}