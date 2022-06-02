var findJudge = function(n, trust) {
    if (!trust.length && n == 1) return 1;
    else if (!trust.length) return -1;
    
    const obj = {};
    for(let i = 0; i < trust.length; i++) {
        const value = trust[i];
        
        if (!obj.hasOwnProperty(value[0])) obj[value[0]] = 0;
        if (!obj.hasOwnProperty(value[1])) obj[value[1]] = 0;
        
        obj[value[0]]--;
        obj[value[1]]++;
    }
    
    for (const key in obj) {
        if (obj[key] >= (n - 1)) return key;
    }
    return -1;
};

let n = 3 ;
let trust = [[1,3],[2,3],[3,1]];//[[1,3],[2,3]];
let result = findJudge(n,trust);

console.log(result);

