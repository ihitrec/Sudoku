
// Enable input on all table cells
$("td").attr("contenteditable", "true");

// Add a key up function on each cell
$("td").attr("onkeyup", "myFunc()");

// If entered key is a number, keep it. Otherwise delete it.
function myFunc() {
    let whichCell = this.event.path[0];
    if (Number.isNaN(parseInt(this.event.key)) == false && this.event.key !== "0") {
        let numKey = this.event.key;
        whichCell.innerText = numKey;
    } else if (Number.isNaN(parseInt(this.event.key)) == true || this.event.key === "0") {
        whichCell.innerText = "";
    }
}
