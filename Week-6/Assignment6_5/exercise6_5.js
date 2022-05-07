let twoSum = (arr, num ) => {
    const hash = {};
    for (let i = 0 ;i<arr.length;i++){
        let diff = arr[i]-num;
        if (hash.hasOwnProperty(diff)){
            return 1; 
        }
        hash[arr[i]] = i;
        
    }
    return 0 ;
}
//Time Complexity is O(n);
//Space complexity is O(1);

let arr = [-10, 20];//[5, 10, 3, 2, 50, 80];
let num = 40;//78;
let result = twoSum(arr,num);
console.log(result);