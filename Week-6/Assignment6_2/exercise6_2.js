let spiralOrder = (m,n,arr) => {
    let k  = 0 ,l = 0 ,i;
    let x=0,y=0;
    let result =[];
    //k->Starting row
    //m-->Ending row 
    //l-->Starting column
    //n-->ending column
    //i --> iteration
 
    while (k < m && l < n) {
        // print the first row from the remaining rows
        for (i = l; i < n; ++i) {
            result[x++] = arr[k][i];
        }
        k++;
        // print the last column from the remaining columns
        for (i = k; i < m; ++i) {
            result[x++] = arr[i][n - 1];
        }
        n--;
 
        // print the last row from the remaining rows
        if (k < m) {
            for (i = n - 1; i >= l; --i) {
                result[x++] = arr[m - 1][i];
            }
            m--;
        }
        // print the first column from the remaining columns
        if (l < n) {
            for (i = m - 1; i >= k; --i) {
                result[x++] = arr[i][l];
            }
            l++;
        }
 
    }
    //console.log(result);
    return result;
    
}
//Time Complexity O(m*n)
//Space Complexity O(m*n);

let matrix = [[ 1, 2, 3, 4 ],
[ 5, 6, 7, 8 ],
[ 9, 10, 11, 12 ],
[ 13, 14, 15, 16 ]];//[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
let result = spiralOrder(4,4,matrix);
console.log(result);