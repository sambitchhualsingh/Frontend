//wheather forcast

// temp = 35,36.5,33.4,39.1,31.4,29.5,28.7


// total temp of week
// avg temp of week

function Temp() {
    this.tempData =[];
}

Temp.prototype.add = function(val) {
    this.tempData.push(val);
}

Temp.prototype.total = function () {
    let tTemp = 0 ;
    for(let i=0; i < this.tempData.length; i++) {
        tTemp += this.tempData[i];
    }
    return tTemp; // total temp value
}

Temp.prototype.avg = function(tempTotal) {
    return tempTotal / this.tempData.length;
}

let x = new Temp();

x.add(35);
x.add(36.5);
x.add(33.4);
x.add(39.1);
x.add(31.4);
x.add(29.5);
x.add(28.7);

let finalTotal = x.total().toFixed(2);
let avgTemp = x.avg(finalTotal);

console.log(`Total temp of week = ${finalTotal}`);
console.log(`Avg temp of week = ${avgTemp}`);