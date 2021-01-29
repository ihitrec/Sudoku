$(document).ready(function () {

    let lastSelectedNum;

    // Premade grids

    let grid1 = [6, 5, 9, "", 1, "", 2, 8, "", 1, "", "", "", 5, "", "", 3, "", 2, "", "", 8, "", "", "", 1, "", "", "", "", 1, 3, 5, "", 7, "", 8, "", "", 9, "", "", "", "", 2, "", "", 3, "", 7, 8, 6, 4, "", 3, "", 2, "", "", 9, "", "", 4, "", "", "", "", "", 1, 8, "", "", "", "", 8, 7, 6, "", "", "", ""];

    // Transfer all cells to new array to manipulate it
    let cellArray = [];
    let cellArrayItems = document.getElementsByTagName("td");
    for (i = 0; i < cellArrayItems.length; i++) {
        cellArray.push(cellArrayItems[i]);
    }

    // Enable input on all table cells
    $("td").attr("contenteditable", "true");

    // Add a key up function on each cell, if entered key is a number, keep it. Otherwise delete it.
    // Check if entered value is correct.
    $("td").keyup(isNum);

    function isNum() {
        let whichCell = this;
        if (Number.isNaN(parseInt(event.key)) == false && event.key !== "0") {
            let numKey = event.key;
            whichCell.innerText = numKey;
            lastSelectedNum = event.key;
            enteredValueCheck();
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
        if ($(lastPressed[0]).attr("contenteditable") === "true") {
            lastPressed[0].innerText = this.innerText;
            lastSelectedNum = this.innerText;
            enteredValueCheck();
        }

    }

    // Start a new game which fills the grid with the pre-made template
    $("button").click(newGame);

    function newGame() {
        $("td").attr("contenteditable", "true");
        gridTemplate();
    }

    function gridTemplate() {
        for (i = 0; i < grid1.length; i++) {
            if (typeof grid1[i] === "number") {
                cellArray[i].innerText = grid1[i];
                $(cellArray[i]).attr("contenteditable", "false");
            }
        }
    }

    // Check same column if the entered value is correct , delete it if not
    function enteredValueCheck() {
        let reduceToSameColumn = cellArray.indexOf(lastPressed[0]);
        if (reduceToSameColumn > 8) {
            let fitsHowMany = Math.floor(reduceToSameColumn / 9);
            reduceToSameColumn = reduceToSameColumn - (9 * fitsHowMany);
        }

        let sameColumn = [];

        for (j = reduceToSameColumn; j < 81; j += 9) {
            sameColumn.push(cellArray[j]);
        }

        let removeACell = sameColumn.indexOf(lastPressed[0]);
        sameColumn.splice(removeACell, 1);

        for (i = 0; i < sameColumn.length; i++) {
            if (sameColumn[i].innerText === lastPressed[0].innerText) {
                $(sameColumn[i]).addClass("wrong");
                $(lastPressed[0]).addClass("wrong");
                setTimeout(function () {
                    $(sameColumn[i]).removeClass("wrong");
                    $(lastPressed[0]).removeClass("wrong");
                    lastPressed[0].innerText = "";
                }, 600)
                console.log(i);
                break;
            } else if (i === 8 - 1) {
                $(lastPressed[0]).attr("contenteditable", "false");
                $(lastPressed[0]).addClass("correct");
                setTimeout(function () {
                    $(lastPressed[0]).removeClass("correct");

                }, 600)
            }
        }

    };
});
