# Assignment3.3

1.function createIncrement() { 

      let count=0; //3. Count is 0
      function increment() {
             count++;
      }
     let message=`Count is${count}; 
     **//4. message literal is created as "count is0" as at this time count value is 0 **
     function log() {
         console.log(message);
      }
     return[increment,log];**//5. return the function**
}

**//1. 1~12 line no  is function definition so in the beginning at the run time there won't be any execution**

const[increment,log] = createIncrement();**//2. At this point createIncrement in called**

increment(); **//5. count becomes 1**

increment();**//6. becomes 2**

increment();**//7. count becomes 3**

log();   **//8. when log is called message is printed which is created as "count is0" in step 4**

- **Answer to the above snippet is “count is0 “**
- Steps of the execution and why answer is “count is0 ” is explained in the steps1~8  across each line .