function solution(date1, date2) {
    const firstDate = new Date(date1[0] + '-' + (date1[1]) + '-' + date1[2]);
    const seconDate = new Date(date2[0] + '-' + (date2[1]) + '-' + date2[2]);
    
    console.log(firstDate);
    console.log(seconDate);
    return firstDate < seconDate ? 1 : 0;
}