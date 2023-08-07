let noSel = document.querySelector('#no');    /* left side select option */
let yesSel = document.querySelector('#yes');  /* right side select option */

let addBtn = document.querySelector('#add');
let removeBtn = document.querySelector('#remove');

//domTarget.addEventListener(event,callback)
addBtn.addEventListener('click', function(e){
    // alert('add btn clicked')
    e.preventDefault();

    let selOpt = document.querySelectorAll("#no option:checked");
      console.log('selected option =',selOpt);

    let exstOpt = document.querySelectorAll('#yes option');
    yesSel.replaceChildren(...selOpt, ...exstOpt);   /* Array -> parameter */
});

removeBtn.addEventListener('click', function(e){
    // alert('remove btn clicked')
    e.preventDefault();

    let exstOpt = document.querySelectorAll('#yes option:checked');

    let selOpt = document.querySelectorAll("#no option");
    noSel.replaceChildren(...exstOpt, ...selOpt);
});
