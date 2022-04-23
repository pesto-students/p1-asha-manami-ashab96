class Promise {
        constructor(handler) {
            this.status = "pending";
            this.value = null;
          
            const resolve = value => {
                if (this.status === "pending") {
                    this.status = "fulfilled";
                    this.value = value;
                }
                
            };
            const reject = value => {
                if (this.status === "pending") {
                    this.status = "rejected";
                    this.value = value;
                }
            };
          
            try {
                handler(resolve, reject);
            } 
            catch (err) {
                reject(err);
            }
        }
      
        then(onFulfilled) {
            if (this.status === "fulfilled") {
                onFulfilled(this.value);
            } 
        }
        catch(onRejected){
            if (this.status === "rejected") {
                onRejected(this.value);
            }
        }
    }


function getNumber(max){
    let num = Math.floor(Math.random() * max);
    let promise_result = new Promise (function (resolve,reject){
      if(num%5 !== 0 ){
          resolve("Sucess Number is not Divisible by 5");
      }else{
          reject("Reject Number is Divisible by 5");
      }
    });
    console.log(num);
    console.log(promise_result);
    return promise_result;

}

let promise = new getNumber(100);
const result = () =>{
    promise.then((message) =>{
        console.log(message);
    }).catch((message) =>{
        console.log(message);
    });
}

result();