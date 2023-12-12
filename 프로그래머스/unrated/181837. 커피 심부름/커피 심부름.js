function solution(order) {
    var answer = 0;
    
    let cost = {
        americano : 4500,
        anything : 4500,
        cafelatte : 5000,
    }
    
    let menus = ['americano', 'cafelatte', 'anything'];
    let orders = [];
    
    for(let orderItem of order){
        for(let menu of menus){
            if(orderItem.includes(menu)){
                orders.push(menu);
            }
        }
    }
    
    orders.forEach((menu)=> {
        answer += cost[menu];
    })
    
    return answer;
}