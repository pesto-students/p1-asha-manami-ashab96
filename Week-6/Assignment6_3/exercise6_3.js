let SortArray = (arr) => {
        let count = [0,0,0];
         for (let j = 0 ;j<arr.length;j++){
            count[arr[j]] +=1;
        }
        let i = 0 ;
        while(count[0]>0){
            arr[i] = 0;
            i++;
            count[0]--;
        }
        while(count[1]>0){
            arr[i] = 1;
            i++;
            count[1]--;
        }
        while(count[2]>0){
            arr[i] = 2;
            i++;
            count[2]--;
        }
}
//Time complexity  -->O(n)
//Space Complexity --> O(1)

let arr = [0 ,2 ,1 ,2, 0];
SortArray(arr);
console.log("Sorted Array is ",arr);
