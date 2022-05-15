let BracketCheck = (x) => {
    let result = true;
    if (x.length == 0 )
    return true ;
    if (x.length%2!==0)
    return  false ;
    let dictionary = {
        '}' :"{",
        ']':"[",
        ')':"("
    }
    let stack = [];
    for (let i = 0 ;i<x.length;i++){
        let currChar = x[i];
        let lastChar = stack[stack.length-1];
        let decChar = dictionary[currChar];
        if (decChar){
                if(decChar == lastChar){
                    stack.pop();
                }
                else{
                    return false
                }
        }
        else{
            stack.push(currChar)
        }

    }
    return !stack.length;
}
let x = "([]"//"{([])}";
let result = BracketCheck(x);//ZTime Complexity is O(n). and Space Complexity is O(n)
console.log(result);