// multi dimentional array

// matrix

// custum muti-dimentional array -> function

Array.matrix = function (row,col,init) {
    let arr =[];
        for(let i=0; i< row; i++) {
            let colms = [];
            for(let j=0; j < col; j++) {
                colms[j] = init * j;
            }
            arr[i] = colms;
        }
        return arr;
};

let res1 = Array.matrix(2,4,6);

console.log('res1 =', res1);