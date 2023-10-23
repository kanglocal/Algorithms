function solution(sizes) {
    var answer = 0;
    
    // let sortedSizes = [...sizes];
    // let widthArr = [];
    // let heightArr = [];
    
    // 정렬
    // for(let size of sortedSizes){
    //     if(size[0] < size[1]){
    //         size.sort((a,b) => {
    //             return b-a;
    //         })
    //     }
    //     widthArr.push(size[0]);
    //     heightArr.push(size[1]);
    // }
    
    const sortedSizes = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
    let maxSize = [0, 0];
    sortedSizes.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    })
    
    answer = maxSize[0] * maxSize[1];
    return answer;
}