/* W.A.P program to find largest 3 number in an array of numbers  */


let arr = [25,45,15,8,75,96,35,47];

/*
    96,75,47
*/


//  conditional statement (largest three number)

function print(x,size) {
    let first, sec, th;

    if(size < 3) {
        console.log('invalid input');
        return;
    }

    th = first = sec = 0;
    
    for(let i=0; i < size; i++) {
        if(x[i] > first) {
        th = sec;
        sec = first;
        first = x[i];
    } else if (x[i] > sec) {
        th = sec;
        sec = x[i];
    } else if (x[i] > th) {
        th = x[i];
    }
    console.log(`first = ${first} and second = ${sec} and third = ${th}`);
  }
}

print(arr,arr.length);