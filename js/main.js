const msgEl = document.getElementById("loc");
function addition() {
    let num;
    let addnum;
    let newnum;
    num = document.getElementById("loc");
    num = parseInt(num.textContent);
    addnum = parseInt(document.getElementById("number").value);
    newnum = (num + addnum);
    if(newnum < 0) {
        msgEl.style.color = "red";
    }
    else if(newnum >= 0) {
        msgEl.style.color = "black";
    }
    msgEl.textContent = newnum;
    return;
}

function subtraction() {
    let num;
    let subnum;
    let newnum;
    num = document.getElementById("loc");
    num = parseInt(num.textContent);
    subnum = parseInt(document.getElementById("number").value);
    newnum = (num - subnum);
    if(newnum < 0) {
        msgEl.style.color = "red";
    }
    else if(newnum >= 0) {
        msgEl.style.color = "black";
    }
    msgEl.textContent = newnum;
    return;
}
