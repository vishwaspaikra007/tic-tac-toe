var content = (ths,id) => {
    setTimeout(() => {
        var mess = document.querySelectorAll(".menu");
        for(i=0;i<mess.length;i++)
        {
            mess[i].children[0].classList = "h1AfterClick";
        }
       
        // alert(mess.innerHTML);
    }, 500);
}