

function Map () {
    this.size = 0;
    this.array =  {};

}

Map.prototype.has = function(c){
    if (this.array[c]){
        return true ;
    }
    else {
        return false ;
    } 
    

}
Map.prototype.set = function(key,value){
    this.array[key] = value;
    this.size = this.array.length;
}
Map.prototype.get = function(key){
    return this.array[key];
}

function isVowel(char){
    return"aeiou".includes(char);
}
function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase()
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar)+1);
            }else{
                vowelMap.set(lowerCaseChar,1);
            }
        }
    }
    return vowelMap;
}
console.log(vowelCount("aeiouasedrrmdooee"));