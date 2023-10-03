/* 
    Sort even and odd numbers

    num = [7,2,9,4,6,1,3,8,5]

    output = [2,4,6,8,7,9,1,3,5]

    lomuto partition algorithem  ()
*/
let x = [7,2,9,4,6,1,3,8,5]

console.log('x = ', x);

function sortEvenAndOdd(num) {

    // pointers
    let i = -1;
    let j = 0;

    let t;

    while(j != num.length) {
        if(num[j] % 2 === 0) {
            // even number
            i++;

            // swap even and odd number
            let temp = num[i];
            num[i] = num[j];
            num[j] = temp;

        }
        j++;
    }

    console.log('num =', num);
}

sortEvenAndOdd(x);

