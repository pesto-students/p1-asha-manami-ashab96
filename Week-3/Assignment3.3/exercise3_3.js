function createIncrement() {
    let count=0; //3. Count is 0 
    function increment() {
        count++;
    }
    let message=`Count is${count}`; //4. message literal is created as "count is0" as at this time count value is 0 
    function log() {
        console.log(message);
    }
    return[increment,log]; //5. return the function 
}
//1.Line 1~12 is function defination so in the beginning  at the run time there won't be any execution 
const[increment,log] = createIncrement(); //2. At this point createIncrement in called 
increment();//5.Now count becomes 1
increment();//6.Count becomes 2
increment();//7.count becomes 3
log();//8. when log is called message is printed which is created as "count is0" in step 4

//Answer is "count is0"