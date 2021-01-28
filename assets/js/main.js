$(document).ready(function () {

    // Enable input on all table cells
    $("td").attr("contenteditable", "true");

    // Add a key up function on each cell, if entered key is a number, keep it. Otherwise delete it.
    $("td").keyup(isNum);

    function isNum() {
        let whichCell = this;
        if (Number.isNaN(parseInt(event.key)) == false && event.key !== "0") {
            let numKey = event.key;
            whichCell.innerText = numKey;
        } else if (Number.isNaN(parseInt(event.key)) == true || event.key === "0") {
            whichCell.innerText = "";
        }
    }

    //  Disable phone keyboard from popping up
    function disableMobile() {
        $("td").attr("contenteditable", "false");
        setTimeout(function () {
            $("td").attr("contenteditable", "true");
        }, 100);
    }

    // Add a click function on each cell. Push the last selected cell into an array. 
    // Call disableMobile on selected screens.
    $("td").click(selectedCell);

    let lastPressed = [];
    function selectedCell() {
        lastPressed = [];
        lastPressed.push(this);
        if (window.innerWidth < 1000) {
            disableMobile();
        }
    }

    // Enter the pressed number on numpad into the last selected cell
    $(".num").click(numPad);
    function numPad() {
        lastPressed[0].innerText = this.innerText;
    }
});

