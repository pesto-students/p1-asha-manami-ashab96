function Set (array) {
    const result = [];
    (function(){
        array.forEach(element => {
            if (!result.includes(element)){
                result.push(element);
            }       
        });
        return result;

    })();
    this.size = result.length;
    this.array = result;


}
const hasDuplicate = (arr) => new Set(arr).size != arr.length;
let test = hasDuplicate([1,2,3,1]);
console.log(test);