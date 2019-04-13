var changeColor = (color)=> {
    document.querySelector('body').style.backgroundColor = color;
    var tic = document.querySelectorAll('.tic');
    for(i=0;i<tic.length;i++)
    {
        tic[i].style.backgroundColor = color;
    }
} 