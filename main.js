function set() {
    var container = document.querySelector('.container');
    container.style.display = "grid";
    var button = document.querySelector('.button');
    button.style.display = "none";
}
var tog = false;
var circleCount=0,crossCount=0;
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
    var box1 = document.querySelector('#box1');
    var box2 = document.querySelector('#box2');
    var box3 = document.querySelector('#box3');
    var box4 = document.querySelector('#box4');
    var box5 = document.querySelector('#box5');
    var box6 = document.querySelector('#box6');
    var box7 = document.querySelector('#box7');
    var box8 = document.querySelector('#box8');
    var box9 = document.querySelector('#box9');
    if((box1.classList.value == box2.classList.value && box1.classList.value == box3.classList.value)||
        (box4.classList.value == box5.classList.value && box4.classList.value == box6.classList.value)||
        (box7.classList.value == box8.classList.value && box7.classList.value == box9.classList.value)||
        (box1.classList.value == box4.classList.value && box1.classList.value == box7.classList.value)||
        (box2.classList.value == box5.classList.value && box2.classList.value == box8.classList.value)||
        (box3.classList.value == box6.classList.value && box3.classList.value == box9.classList.value)||
        (box1.classList.value == box5.classList.value && box1.classList.value == box9.classList.value)||
        (box3.classList.value == box5.classList.value && box3.classList.value == box7.classList.value))
    {
        setTimeout(() => {
            alert(add.classList[0] + " win");
            box1.classList = "box fa1";
            box2.classList = "box fa2";
            box3.classList = "box fa3";
            box4.classList = "box fa4";
            box5.classList = "box fa5";
            box6.classList = "box fa6";
            box7.classList = "box fa7";
            box8.classList = "box fa8";
            box9.classList = "box fa9";
        }, 700); 
        if(add.classList[0] == 'cross') {
            crossCount++ ;
            document.querySelector('#crossWin').innerHTML = "<span>Cross:" + crossCount + "</span>";
            document.querySelector('#crossWin2').innerHTML = "<span>Cross:" + crossCount + "</span>";
        }
        else if( add.classList[0] == 'circle'){
            circleCount++;
            document.querySelector('#circleWin').innerHTML = "<span>Circle" + circleCount + "</span>";
            document.querySelector('#circleWin2').innerHTML = "<span>Circle" + circleCount + "</span>";
        }
    } 
}


