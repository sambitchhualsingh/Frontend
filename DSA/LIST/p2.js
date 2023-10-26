let myFile = document.getElementById("myFile");
let output = null;

myFile.addEventListener("change", function (e) {
    e.preventDefault();

    let fr = new FileReader();  // file reader instance

    fr.onload = function () {
        result = fr.result;
        console.log('output =', result);
        let final = textToArr(result);
        console.log('text to Array = ', final);ssss
    }
    console.log('file data', this.files);
    fr.readAsText(this.files[0]);
});


// text to array conversion
function textToArr(arr) {
    let rArr = arr.split("\n");
    for(let i=0; i< rArr.length; i++) {
        rArr[i] = rArr[i].trim();
    }
    return rArr;
}