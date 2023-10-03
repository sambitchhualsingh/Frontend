/*
    arr = [1,2,3,4,5,6]

    res = [FH,FL,SH,SL,TH,TL,FH,FL...]

    RES = [6,1,5,2,4,3]
*/


function rearrange(num) {
    let n = num.length;

   // temp array of original length
   let temp = new Array(n);  // new Array(length)

   // const
   let sm = 0;
   let lg = n-1;

   let fg = true;  /* to indicate wheather we need to copy remaining largest or remaining smallest at next position */

    for(let i=0; i < n; i++) {
        if(fg)
            temp[i] = num[lg--];
        else
            temp[i] = num[sm++];
        fg = !fg
    }
    console.log('temp =', temp);

}

let x = [1,2,3,4,5,6];

rearrange(x);
