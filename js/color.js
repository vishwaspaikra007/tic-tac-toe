var changeColor = (color)=> {
    document.querySelector('body').style.backgroundColor = color;
    var tic = document.querySelectorAll('.tic');
    for(i=0;i<tic.length;i++)
    {
        tic[i].style.backgroundColor = color;
    }
    if(color=='black')
        document.querySelector('#gamePad').style.background 
            = 'radial-gradient(rgba(250, 250, 250, 1) 37%, transparent,transparent)';
    else
        document.querySelector('#gamePad').style.background 
            = 'radial-gradient(rgba(0, 0, 0, 0.7) 37%, transparent,transparent)';
} 