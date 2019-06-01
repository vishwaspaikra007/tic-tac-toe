var changeColor = (color)=> {
    document.querySelector('body').style.backgroundColor = color;
    document.querySelector('body').classList.remove('rainbow');
    var tic = document.querySelectorAll('.tic');
    for(i=0;i<tic.length;i++)
    {
        tic[i].classList.remove('ticRainbow');
        tic[i].style.backgroundColor = color;
    }
    if(color=='black')
        document.querySelector('#gamePad').style.background 
            = 'radial-gradient(rgba(250, 250, 250, 1) 37%, transparent,transparent)';
    else
        document.querySelector('#gamePad').style.background 
            = 'radial-gradient(rgba(0, 0, 0, 0.7) 37%, transparent,transparent)';
} 
var backgroundAnimation = () => {
    document.querySelector('body').classList += 'rainbow';
    document.querySelector('body').style.backgroundColor =
        "linear-gradient(to left,violet,blue,green,yellow,orange,red)";
    var tic = document.querySelectorAll('.tic');
    document.querySelector('#gamePad').style.background = "transparent";
    for(i=0;i<tic.length;i++)
    {
        tic[i].classList += " ticRainbow ";
        tic[i].style.backgroundColor = "transparent";
        if(i==0)
            tic[i].style.backgroundPosition = "right bottom";
        else if(i==1)
            tic[i].style.backgroundPosition = "bottom center";
        else if(i==2)
            tic[i].style.backgroundPosition = "bottom left";
        else if(i==3)
            tic[i].style.backgroundPosition = "right center";
        else if(i==4)
            tic[i].style.backgroundPosition = "center";
        else if(i==5)
            tic[i].style.backgroundPosition = "left center";
        else if(i==6)
            tic[i].style.backgroundPosition = "top right";
        else if(i==7)
            tic[i].style.backgroundPosition = "top center";
        else if(i==8)
            tic[i].style.backgroundPosition = "top left";
    }
}