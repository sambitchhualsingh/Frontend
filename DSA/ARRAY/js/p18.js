
var marks = [[68,72],[85,76,82], [83,94,65,84]];

console.log('marks =', marks);

var total = 0;
var avg = 0.0;

// i = row
// j = column

for(var i=0; i < marks.length; i++) {
    for(var j=0; j < marks[i].langth; j++) {
        total += marks[i][j];
    }
    console.log(`total = `, total);
    avg = total / marks[i].length;
    console.log(`Student `, parseInt(i+1) + ", Avg = ", avg.toFixed(2));
    total = 0;
    avg = 0.0;
}