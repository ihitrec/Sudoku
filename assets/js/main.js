
// Enable input on all table cells
$("td").attr("contenteditable", "true");

// Add a key up function on each cell, if entered key is a number, keep it. Otherwise delete it.
$("td").attr("onkeyup", "isNum()");

function isNum() {
    let whichCell = this.event.path[0];
    if (Number.isNaN(parseInt(this.event.key)) == false && this.event.key !== "0") {
        let numKey = this.event.key;
        whichCell.innerText = numKey;
    } else if (Number.isNaN(parseInt(this.event.key)) == true || this.event.key === "0") {
        whichCell.innerText = "";
    }
}

//  Disables phone keyboard from popping up
function disableMobile() {
    setTimeout(function () {
        $("td").attr("contenteditable", "false");
        $("td").attr("contenteditable", "true");
    });
}

// Add a click function on each cell. Push the last selected cell into an array. 
// Call disableMobile on selected screens.
$("td").attr("onclick", "selectedCell()");

let lastPressed = [];
function selectedCell() {
    lastPressed = [];
    lastPressed.push(this.event.path[0]);
    if (window.innerWidth < 1000) {
        disableMobile();
    }
}

// Enter the pressed number on numpad into the last selected cell
$(".num").attr("onclick", "numPad()");

function numPad() {
    console.log(lastPressed);
    lastPressed[0].innerText = this.event.path[0].innerText;
}

