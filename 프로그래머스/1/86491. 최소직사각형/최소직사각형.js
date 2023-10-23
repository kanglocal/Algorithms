function solution(sizes) {
    var answer = 0;
    
    let sortedSizes = [...sizes];
    let widthArr = [];
    let heightArr = [];
    
    // 정렬
    for(let size of sortedSizes){
        if(size[0] < size[1]){
            size.sort((a,b) => {
                return b-a;
            })
        }
        widthArr.push(size[0]);
        heightArr.push(size[1]);
    }
    
    answer = Math.max(...widthArr) * Math.max(...heightArr)
    return answer;
}