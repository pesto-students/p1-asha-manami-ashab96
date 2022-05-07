let maxProfit = (arr) => {
    let profit = 0 ;
    for (let i = 0 ;i<arr.length-1;i++){
        for(let j = i+1 ;j<arr.length;j++){
            if(arr[i]<arr[j]){
                //console.log(profit);
                profit = Math.max(arr[j]-arr[i],profit);
            }
        }
    }
    return profit ;
}
//Time Complexity is O(n^2)
//Space Complexity is O(1)

let price = [7,6,4,3,1];//[7,1,5,3,6,4];
let profit = maxProfit(price);
console.log(profit);