function solution(people, limit) {
//     var answer = 0;
    
//     people.sort((a,b) => a-b);
    
//     let minusCnt = 0;
//     for(let i = 0; i < people.length; i++){
//         for(let j = people.length; j > 0; j--){
//             if(i != j){
//                 if(people[i] + people[j] <= limit){
//                     minusCnt ++;
//                     continue;
//                 }    
//             }
            
//         }
//     }
//     answer = people.length - minusCnt;
    
//     return answer;
    
    people.sort(function(a, b){return a-b});
    for(var i=0, j=people.length-1; i < j; j--) {
        if( people[i] + people[j] <= limit ) i++;
    }    
    return people.length-i;
}