const maxsubArraySum = (A) => {
    let a = A[0];
    let b = A[0];
    console.log(A.length);
    for (let i = 1 ;i<A.length;i++){
        a = Math.max(a+A[i] , A[i]);
        b = Math.max(a,b);
    }
    return b;
} 
// Time Complexity of this function is "O(n)"
//Space Complexity  is O(2);


const  A = [-2, 1, -3, 4, -1, 2, 1, -5, 4];//[1, 2, 3, 4, -10];
let sum = maxsubArraySum(A);
console.log("Maximum sum from the subarray is" , sum);

