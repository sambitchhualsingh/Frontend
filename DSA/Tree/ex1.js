
 function *colors() {
    yield "white";
    yield "red";
    yield "color";
    yield "bule";
    yield "orange";
 }

 console.log(colors())

 console.log('\n')

 for(let item of colors()) {
    console.log(`item =`, item)
 }