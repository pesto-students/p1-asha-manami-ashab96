let findNextGe = (arr) =>{
    let stack = [];
    let j = 0;
    let ans = [];
    for (let i = arr.length-1 ;i>=0;i--){
        while(stack.length!=0 && stack[stack.length-1]<arr[i]){
            stack.pop()
        }
        if (stack.length == 0 ){
            ans[i] = -1;
        }else{
            ans[i] = stack[stack.length-1];
        }
        stack.push(arr[i]);
    }
    return ans;
}

let arr = [6,8,0,1,3];
let result = findNextGe(arr);
console.log(result);