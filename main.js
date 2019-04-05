function set() {
    var container = document.querySelector('.container');
    container.style.display = "grid";
    var button = document.querySelector('.button');
    button.style.display = "none";
}
function occupy(ths) {
    var add = document.querySelector('#' + ths)
    add.classList += " circleSelected";
}