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
        $(lastPressed[0]).removeClass("mobile-focus");
        lastPressed = [];
        lastPressed.push(this);
        if (window.innerWidth < 1000) {
            disableMobile();
            $(lastPressed[0]).addClass("mobile-focus");
        }
    }

    // Enter the pressed number on numpad into the last selected cell
    $(".num").click(numPad);
    function numPad() {
        lastPressed[0].innerText = this.innerText;
    }

    // Start a new game which fills the grid with the pre-made template
    $("button").click(newGame);

    function newGame() {
        $("td").attr("contenteditable", "true");
        gridTemplate();
    }

    let grid1 = [6, 5, 9, "", 1, "", 2, 8, "", 1, "", "", "", 5, "", "", 3, "", 2, "", "", 8, "", "", "", 1, "", "", "", "", 1, 3, 5, "", 7, "", 8, "", "", 9, "", "", "", "", 2, "", "", 3, "", 7, 8, 6, 4, "", 3, "", 2, "", "", 9, "", "", 4, "", "", "", "", "", 1, 8, "", "", "", "", 8, 7, 6, "", "", "", ""];
    let cellArray = $("td");

    function gridTemplate() {
        for (i = 0; i < grid1.length; i++) {
            if (typeof grid1[i] === "number") {
                cellArray[i].innerText = grid1[i];
                $(cellArray[i]).attr("contenteditable", "false");
            }

        }
    }


});

