// let  fibnocci = {
//     n:5,
//     [Symbol.iterator] (){
//         let i = 1;
//         let old_value =0, new_value = 0;
//         return {
//             next(){
//                 if (i++ <= this.n){
//                     [old_value,new_value] = [new_value,(old_value+new_value) || 1];
//                     console.log("value")
//                     return {value:old_value,done:false}
//                 }
//                 else{
//                     return {done:true}
//                 }
//             }
//         }
//     }

// };

let fib = (n) => ({
    [Symbol.iterator](){
        let i = 1;
        let old_value =0, new_value = 0;
        //let n=5;
        return{
            next(){
                if(i++ <= n){
                    [old_value,new_value] = [new_value,(old_value+new_value) || 1];
                    return{value:old_value,done:i > 10};
                }
                else{
                    return{done:true};
                }
            },
            
        };
    },

});


for (let num of fib(7)){
    console.log(num)
}