function set() {
    var container = document.querySelector('.container');
    container.style.display = "grid";
    var button = document.querySelector('.button');
    button.style.display = "none";
}
var tog = false;
function occupy(ths) {
    var add = document.querySelector('#' + ths);
    if(tog==false && add.classList!= "circle circleSelected " && add.classList!= "cross crossSelected ") {
        add.classList = "cross crossSelected ";
        tog = !tog;
    }
    else if(tog==true && add.classList!= "circle circleSelected " && add.classList!= "cross crossSelected ") {
        add.classList = "circle circleSelected ";
        tog = !tog;
    }   
    var box1 = document.querySelector('#box1').classList.value;
    var box2 = document.querySelector('#box2').classList.value;
    var box3 = document.querySelector('#box3').classList.value;
    var box4 = document.querySelector('#box4').classList.value;
    var box5 = document.querySelector('#box5').classList.value;
    var box6 = document.querySelector('#box6').classList.value;
    var box7 = document.querySelector('#box7').classList.value;
    var box8 = document.querySelector('#box8').classList.value;
    var box9 = document.querySelector('#box9').classList.value;
    if((box1 == box2 && box1 == box3)||
        (box4 == box5 && box4 == box6)||
        (box7 == box8 && box7 == box9)||
        (box1 == box4 && box1 == box7)||
        (box2 == box5 && box2 == box8)||
        (box3 == box6 && box3 == box9)||
        (box1 == box5 && box1 == box9)||
        (box3 == box5 && box3 == box7))
    {
        setTimeout(() => {
            alert(add.classList[0] + " win");
        }, 700); 
    } 
}


