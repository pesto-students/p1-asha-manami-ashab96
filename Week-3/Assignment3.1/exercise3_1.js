function memorize(fn){
    const cache = new Map();
    return function (...args){
        const key = args.toString();
        if(cache.has(key)){
            return cache.get(key);
        }
        cache.set(key,fn(...args))
        return cache.get(key);
    }
}

function add (){
    var sum = 0;
    for (var i =0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    console.log(sum);
    return sum;

}
function time(fn){
    console.time();
    fn();
    console.timeEnd();

}
const add_mem = memorize(add);
time(() => add_mem(100,100));
time(() => add_mem(100));
time(() => add_mem(100,200));
time(() => add_mem(100,100));