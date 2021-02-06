$(document).ready(function () {

    let lastSelectedNum;

    /* Premade grids */

    // beginner
    let beginner1 = [6, 5, 9, "", 1, "", 2, 8, "", 1, "", "", "", 5, "", "", 3, "", 2, "", "", 8, "", "", "", 1, "", "", "", "", 1, 3, 5, "", 7, "", 8, "", "", 9, "", "", "", "", 2, "", "", 3, "", 7, 8, 6, 4, "", 3, "", 2, "", "", 9, "", "", 4, "", "", "", "", "", 1, 8, "", "", "", "", 8, 7, 6, "", "", "", ""];
    let beginner2 = ["", 6, "", "", 7, 2, "", "", 1, 8, "", "", 1, 3, 6, 5, "", "", "", "", 3, 4, "", "", "", "", "", 2, "", "", 6, 5, "", "", 3, "", "", "", 6, "", "", 7, "", 1, "", "", "", "", 2, "", "", 8, 6, 4, 9, "", 7, "", 8, 4, "", "", "", "", "", 8, "", "", 9, "", 7, "", "", "", "", 7, 2, 1, "", 8, 3];
    let beginner3 = ["", "", "", "", "", "", 9, 2, "", 5, 4, "", "", 3, "", 1, "", "", "", "", 8, "", 5, 7, "", "", 4, "", 5, "", "", 8, "", "", "", 3, 9, "", 3, "", 4, 6, 8, "", "", 1, "", "", 3, "", "", "", 4, "", "", 7, "", 4, "", "", "", "", "", 3, 6, 1, "", 7, 9, "", 8, "", "", "", "", "", 6, "", "", 3, 7];

    // intermediate
    let intermediate1 = ["", "", "", "", "", "", "", "", 2, "", "", "", "", "", "", 9, 4, "", "", "", 3, "", "", "", "", "", 5, "", 9, 2, 3, "", 5, "", 7, 4, 8, 4, "", "", "", "", "", "", "", "", 6, 7, "", 9, 8, "", "", "", "", "", "", 7, "", 6, "", "", "", "", "", "", 9, "", "", "", 2, "", 4, "", 8, 5, "", "", 3, 6, ""];
    let intermediate2 = [4, "", 6, "", "", "", "", 5, 9, "", "", "", "", 4, "", 2, "", "", "", 7, "", "", "", "", "", "", "", "", "", 5, 9, 1, "", "", 6, "", "", 1, 3, "", "", "", 8, 9, 4, "", "", "", 2, "", "", "", "", 1, 5, "", 8, "", "", "", "", "", "", "", "", "", "", 3, "", "", "", 8, "", 4, "", "", 6, "", 1, "", ""];
    let intermediate3 = ["", "", "", "", "", 8, "", 9, "", "", "", 3, "", "", 1, "", "", "", 2, "", "", "", "", 7, 6, "", "", "", "", "", "", 2, "", "", "", "", "", 9, 4, "", 8, "", 2, "", "", 7, 1, "", "", 4, "", 9, "", 5, 1, "", "", 9, "", "", 5, 3, "", 5, 7, "", "", "", "", 8, 4, "", "", "", "", "", "", 6, "", 2, 1];

    // expert
    let expert1 = [9, 5, "", "", "", 1, "", "", 2, 6, 3, "", "", "", "", 1, "", "", "", "", 8, "", 6, "", "", "", 7, "", "", "", "", "", "", 5, "", "", "", 6, 1, 7, "", 9, "", "", "", "", "", 2, "", 4, "", "", "", 8, "", 9, "", "", "", "", "", "", 5, "", 1, "", "", 5, 6, 4, 8, "", "", 8, "", "", 1, 7, "", "", 6];
    let expert2 = ["", 3, 5, "", "", "", "", 7, 6, 6, 4, "", 5, "", 7, "", 1, "", 7, "", "", "", "", "", 4, "", "", 8, "", 3, "", "", 6, "", "", 4, "", 9, "", 3, 4, "", 2, "", "", 4, "", "", 9, "", 1, "", 3, 7, "", "", 4, 2, "", "", "", "", 5, 5, "", "", "", "", "", 3, "", 1, 3, "", "", 6, "", "", "", 4, ""];
    let expert3 = ["", 2, "", 7, 6, "", "", "", 3, "", "", "", "", "", "", 2, "", "", 9, "", 6, "", 2, "", "", 4, "", 8, "", 7, 4, "", "", "", 1, "", "", "", "", 1, "", "", "", "", "", 1, 9, "", 5, 3, "", 6, "", 8, 4, 8, 9, "", "", 1, "", 3, 6, "", "", "", "", 5, 9, "", "", "", 2, 1, "", "", "", "", "", 8, 9];


    /* Premade grids solved */

    // beginner
    let beginner1Solved = [6, 5, 9, 3, 1, 4, 2, 8, 7, 1, 8, 7, 6, 5, 2, 4, 3, 9, 2, 3, 4, 8, 9, 7, 5, 1, 6, 4, 2, 6, 1, 3, 5, 9, 7, 8, 8, 7, 1, 9, 4, 6, 3, 5, 2, 5, 9, 3, 2, 7, 8, 6, 4, 1, 3, 1, 2, 5, 8, 9, 7, 6, 4, 7, 6, 5, 4, 2, 1, 8, 9, 3, 9, 4, 8, 7, 6, 3, 1, 2, 5];
    let beginner2Solved = [4, 6, 5, 8, 7, 2, 3, 9, 1, 8, 9, 2, 1, 3, 6, 5, 4, 7, 7, 1, 3, 4, 9, 5, 6, 2, 8, 2, 4, 1, 6, 5, 8, 7, 3, 9, 3, 8, 6, 9, 4, 7, 2, 1, 5, 5, 7, 9, 2, 1, 3, 8, 6, 4, 9, 2, 7, 3, 8, 4, 1, 5, 6, 1, 3, 8, 5, 6, 9, 4, 7, 2, 6, 5, 4, 7, 2, 1, 9, 8, 3];
    let beginner3Solved = [7, 3, 6, 8, 1, 4, 9, 2, 5, 5, 4, 9, 6, 3, 2, 1, 7, 8, 2, 1, 8, 9, 5, 7, 3, 6, 4, 6, 5, 4, 2, 8, 1, 7, 9, 3, 9, 2, 3, 7, 4, 6, 8, 5, 1, 1, 8, 7, 3, 9, 5, 2, 4, 6, 8, 7, 5, 4, 2, 3, 6, 1, 9, 3, 6, 1, 5, 7, 9, 4, 8, 2, 4, 9, 2, 1, 6, 8, 5, 3, 7];

    //intermediate
    let intermediate1Solved = [6, 8, 4, 1, 5, 9, 7, 3, 2, 7, 5, 1, 8, 3, 2, 9, 4, 6, 9, 2, 3, 6, 7, 4, 1, 8, 5, 1, 9, 2, 3, 6, 5, 8, 7, 4, 8, 4, 5, 2, 1, 7, 6, 9, 3, 3, 6, 7, 4, 9, 8, 2, 5, 1, 2, 3, 9, 7, 4, 6, 5, 1, 8, 5, 1, 6, 9, 8, 3, 4, 2, 7, 4, 7, 8, 5, 2, 1, 3, 6, 9];
    let intermediate2Solved = [4, 3, 6, 1, 2, 8, 7, 5, 9, 9, 5, 1, 7, 4, 6, 2, 8, 3, 8, 7, 2, 3, 5, 9, 4, 1, 6, 7, 8, 5, 9, 1, 4, 3, 6, 2, 2, 1, 3, 6, 7, 5, 8, 9, 4, 6, 9, 4, 2, 8, 3, 5, 7, 1, 5, 2, 8, 4, 9, 1, 6, 3, 7, 1, 6, 7, 5, 3, 2, 9, 4, 8, 3, 4, 9, 8, 6, 7, 1, 2, 5];
    let intermediate3Solved = [6, 4, 7, 5, 3, 8, 1, 9, 2, 9, 5, 3, 2, 6, 1, 4, 7, 8, 2, 8, 1, 4, 9, 7, 6, 5, 3, 8, 6, 5, 7, 2, 9, 3, 1, 4, 3, 9, 4, 1, 8, 5, 2, 6, 7, 7, 1, 2, 6, 4, 3, 9, 8, 5, 1, 2, 8, 9, 7, 4, 5, 3, 6, 5, 7, 6, 3, 1, 2, 8, 4, 9, 4, 3, 9, 8, 5, 6, 7, 2, 1];

    //expert
    let expert1Solved = [9, 5, 4, 3, 7, 1, 8, 6, 2, 6, 3, 7, 8, 9, 2, 1, 5, 4, 1, 2, 8, 5, 6, 4, 9, 3, 7, 8, 4, 9, 6, 2, 3, 5, 7, 1, 5, 6, 1, 7, 8, 9, 2, 4, 3, 3, 7, 2, 1, 4, 5, 6, 9, 8, 2, 9, 6, 4, 3, 8, 7, 1, 5, 7, 1, 3, 2, 5, 6, 4, 8, 9, 4, 8, 5, 9, 1, 7, 3, 2, 6];
    let expert2Solved = [2, 3, 5, 1, 9, 4, 8, 7, 6, 6, 4, 8, 5, 3, 7, 9, 1, 2, 7, 1, 9, 8, 6, 2, 4, 5, 3, 8, 5, 3, 7, 2, 6, 1, 9, 4, 1, 9, 7, 3, 4, 5, 2, 6, 8, 4, 6, 2, 9, 8, 1, 5, 3, 7, 9, 7, 4, 2, 1, 3, 6, 8, 5, 5, 8, 6, 4, 7, 9, 3, 2, 1, 3, 2, 1, 6, 5, 8, 7, 4, 9];
    let expert3Solved = [5, 2, 1, 7, 6, 4, 8, 9, 3, 3, 4, 8, 9, 1, 5, 2, 6, 7, 9, 7, 6, 3, 2, 8, 1, 4, 5, 8, 5, 7, 4, 9, 6, 3, 1, 2, 6, 3, 2, 1, 8, 7, 9, 5, 4, 1, 9, 4, 5, 3, 2, 6, 7, 8, 4, 8, 9, 2, 7, 1, 5, 3, 6, 7, 6, 3, 8, 5, 9, 4, 2, 1, 2, 1, 5, 6, 4, 3, 7, 8, 9];





    // Transfer all cells to new array to manipulate it.
    let cellArray = [];
    let cellArrayItems = document.getElementsByTagName("td");
    for (i = 0; i < cellArrayItems.length; i++) {
        cellArray.push(cellArrayItems[i]);
    }

    // Enable input on all table cells
    $("td").attr("contenteditable", "true");

    // Add a key down function on each cell. If entered key is a number, input and check it. 
    // Otherwise do not input it.
    $("td").keydown(isNum);
    function isNum() {
        let whichCell = this;
        if (/[1-9]/.test(event.key) === true) {
            enteredValueCheck(whichCell, event.key);
        } else {
            $(whichCell).attr("contenteditable", "false");
            $(whichCell).attr("contenteditable", "true");
            setTimeout(function () {
                $(whichCell).focus();
            }, 10)
        }
    }

    // Add a click function on each cell. Push the last selected cell into an array.
    $("td").click(selectedCell);
    let lastPressed = [];
    function selectedCell() {
        $(lastPressed[0]).removeClass("focused");
        lastPressed = [];
        lastPressed.push(this);
        $(lastPressed[0]).addClass("focused");
        disableMobile();
    }

    //  Disable mobile keyboard from popping up on selected screens.
    function disableMobile() {
        if (window.innerWidth < 1000 && $(lastPressed).text() === "") {
            $(lastPressed).attr("contenteditable", "false");
            setTimeout(function () {
                $(lastPressed).attr("contenteditable", "true");
            }, 100);
        }
    }

    // Enter the pressed number on numpad into the last selected cell.
    $(".num").click(numPad);
    function numPad() {
        if ($(lastPressed[0]).attr("contenteditable") === "true") {
            lastPressed[0].innerText = this.innerText;
            lastSelectedNum = this.innerText;
            enteredValueCheck(lastPressed[0], lastSelectedNum);
        }
    }

    // Start a new game which fills the grid with the pre-made template.
    $("button").click(newGame);
    function newGame() {
        $("td").text("");
        $("td").attr("contenteditable", "true");
        gridTemplate();
    }
    function gridTemplate() {
        for (i = 0; i < intermediate2.length; i++) {
            if (typeof intermediate2[i] === "number") {
                cellArray[i].innerText = intermediate2[i];
                $(cellArray[i]).attr("contenteditable", "false");
            }
        }
    }

    // Check entered value.
    function enteredValueCheck(whichCell, whichNum) {

        // Get cells in the same column.
        let sameColumn = [];
        let reduceToSameColumn = cellArray.indexOf(whichCell);
        if (reduceToSameColumn > 8) {
            let fitsHowMany = Math.floor(reduceToSameColumn / 9);
            reduceToSameColumn = reduceToSameColumn - (9 * fitsHowMany);
        }
        for (j = reduceToSameColumn; j < 81; j += 9) {
            sameColumn.push(cellArray[j]);
        }
        reduceToSameRow = cellArray.indexOf(sameColumn[0]);// Belongs to same row part
        let removeACell = sameColumn.indexOf(whichCell);
        sameColumn.splice(removeACell, 1);

        // Get cells in the same row.
        let sameRow = [];
        let firstRowIndex = cellArray.indexOf(whichCell) - reduceToSameRow;
        for (nineTimes = 0; nineTimes < 9; nineTimes++) {
            if (nineTimes === reduceToSameRow) {
                continue;
            } else {
                sameRow.push(cellArray[firstRowIndex + nineTimes]);
            }
        }

        // Executes if inputed cell is wrong in the loop below.
        function itsWrong(p1, i) {
            $(p1[i]).attr("contenteditable", "false");
            $(p1[i]).addClass("wrong");
            $(whichCell).addClass("wrong");
            setTimeout(function () {
                $(p1[i]).removeClass("wrong");
                $(whichCell).removeClass("wrong");
                $(whichCell).text("");
                $(whichCell).attr("contenteditable", "true");
                disableMobile();
                whichCell.focus();
            }, 600);
        }

        // If selected cell input is wrong, signal why and delete it.
        // Otherwise mark it as correct.
        let actualValue = intermediate2Solved[cellArray.indexOf(whichCell)].toString();
        for (i = 0; i < 8; i++) {
            if ($(sameColumn[i]).text() === whichNum) {
                itsWrong(sameColumn, i);
                break;
            } else if ($(sameRow[i]).text() === whichNum) {
                itsWrong(sameRow, i);
                break;
            } else if (whichNum !== actualValue) {
                $(whichCell).addClass("wrong");
                setTimeout(function () {
                    $(whichCell).removeClass("wrong");
                    $(whichCell).text("");
                    $(whichCell).attr("contenteditable", "true");
                    disableMobile();
                }, 600);
            } else if (i === 7) {
                setTimeout(function () {
                    $(whichCell).attr("contenteditable", "false");
                }, 10)
                $(whichCell).addClass("correct");
                setTimeout(function () {
                    $(whichCell).removeClass("correct");
                }, 600);
            }
        }
    };
});