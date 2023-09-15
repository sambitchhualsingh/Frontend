let fuser = document.getElementById("user");
let fStatus = document.getElementById("status");

function validateUser(user){
    let str = /^[a-zA-z]+$/;

    if(str.test(fuser.value)) {
        fStatus.innerHTML = `Valid input`;
        fStatus.classList.add("success");
        hideStatus("success");
    } else {
        fStatus.innerHTML = `Invalid input`;
        fStatus.classList.add("error");
        hideStatus("error");
    }
}

function hideStatus(clsName) {
    setTimeout(() =>{
        fStatus.innerHTML = '';
        fStatus.classList.remove(clsName);
    }, 3000);
}