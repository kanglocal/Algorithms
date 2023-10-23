function solution(sizes) {
    var answer = 0;
    
    const sortedSizes = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
    let maxSize = [0, 0];
    sortedSizes.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    })
    
    answer = maxSize[0] * maxSize[1];
    return answer;
}