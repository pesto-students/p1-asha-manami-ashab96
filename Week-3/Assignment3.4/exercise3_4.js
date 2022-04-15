function createStack() {
    let items= [];
    return{
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        }
    };
}
 conststack=createStack();
 conststack.push(10);
 conststack.push(5);
 conststack.pop();// => 5
 console.log(conststack.items);
 
