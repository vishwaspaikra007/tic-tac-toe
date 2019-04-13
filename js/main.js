// function to remove button container
// game appears
function set() {
    var button = document.querySelector('.button');
    button.style.display = "none";
}
function addContent(ths,index) {
    
}
// to expand menu section
function expandMenu(ths,index) {
    ths.classList += " expandMenu ";
    var non = document.querySelectorAll(".menu");
    for(i=0;i<non.length;i++)
        {
            if(i!=index)
            {
                non[i].classList += " shrinkMenu "
            }
        }
    document.querySelector('.close').style.display = 'block';
    addContent(ths,index);
}
// main logic behind tic tac toe
//it's better if i don't see it again
//cause in future it will be something better
var tog = false;
var circleCount=0,crossCount=0,chance=0;
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
        prntWin(add);
    } 
    else if((box1.classList[0] == 'cross' || box1.classList[0] == 'circle')&&
        (box2.classList[0] == 'cross' || box2.classList[0] == 'circle')&&
        (box3.classList[0] == 'cross' || box3.classList[0] == 'circle')&&
        (box4.classList[0] == 'cross' || box4.classList[0] == 'circle')&&
        (box5.classList[0] == 'cross' || box5.classList[0] == 'circle')&&
        (box6.classList[0] == 'cross' || box6.classList[0] == 'circle')&&
        (box7.classList[0] == 'cross' || box7.classList[0] == 'circle')&&
        (box8.classList[0] == 'cross' || box8.classList[0] == 'circle')&&
        (box9.classList[0] == 'cross' || box9.classList[0] == 'circle'))
    {
        var draw = "draw";
        prntWin(draw);
    }
    }
    function prntWin(add) {
        chance++;
        setTimeout(() => {
            document.querySelector('.winner').style.display = "grid";
            if(add=='draw') {
                document.querySelector('.winner').innerHTML 
                = "<span><b>DRAW<b></span>";
            }
            else {
                document.querySelector('.winner').innerHTML 
                = "<span>" + add.classList[0] + " is Winner</span>";
            }
            setTimeout(() => {
                document.querySelector('.winner').style.transform = "rotate(180deg)";
            },1500);
            setTimeout(() => {
                if(chance%2!=0) {
                    document.querySelector('.winner').innerHTML 
                    = "<span>Circle turn</span>";
                    tog=true;
                }
            else {
                document.querySelector('.winner').innerHTML 
                    = "<span>Cross turn</span>";
                tog=false;
                }
            },3500);
            setTimeout(() => {
                document.querySelector('.winner').style.transform = "rotate(0deg)";
            },5500);
            setTimeout(() => {
                document.querySelector('.winner').style.display = "none";
            },7500);
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
        if(add == 'draw')
            return;
        else if(add.classList[0] == 'cross') {
            crossCount++ ;
            document.querySelector('#crossWin').innerHTML = "<span>Cross : " + crossCount + "</span>";
            document.querySelector('#crossWin2').innerHTML = "<span>Cross : " + crossCount + "</span>";
        }
        else if( add.classList[0] == 'circle'){
            circleCount++;
            document.querySelector('#circleWin').innerHTML = "<span>Circle : " + circleCount + "</span>";
            document.querySelector('#circleWin2').innerHTML = "<span>Circle : " + circleCount + "</span>";
        }
    }


