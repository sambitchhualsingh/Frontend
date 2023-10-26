// 3 student marks
// 4 subject

var marks = [[68,72,56,64],[85,76,82,79],[83,94,65,84]];

let total = 0;
let avg = 0.0;

// 3 row
// 4 col

for(let i=0; i < marks.length; i++) {
    for(let j=0; j < marks[i].length; j++) {
        total += marks[i] [j];
        console.log(`student[i] = ${total}`);
    }

    console.log('total =', total);

    avg = total / marks[i].length;
    console.log(`Student =`, parseInt(i+1), ", Avg =", avg.toFixed(2));
    total = 0;
    avg = 0.0;
}


// jagged Array



