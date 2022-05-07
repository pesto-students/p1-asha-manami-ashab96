let threeSum = (arr,target) => {
    let sum = 0 ;
    let diff = 0;
    let hash = {};
    for (let i = 0 ;i<arr.length-2;i++){
         sum = arr[i]+arr[i+1]+arr[i+2];
         diff = sum - target;
         if (i == 0 ){
            hash.sum = sum;
         }
         hash.diff = Math.min(diff,hash.diff);
         if (diff == hash.diff){
            hash.sum = sum;
         }
         
         
    }
    return hash.sum;
}
//Time Complexity is O(n)
//Space Complexity is O(1)

let arr = [-1 ,2, 1 ,-4];
let sum =  1;
let result = threeSum(arr,sum);
console.log(result);