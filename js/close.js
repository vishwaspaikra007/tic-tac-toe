var closeMenu = (ths) => {
    var non = document.querySelectorAll(".menu");
    for(i=0;i<non.length;i++)
        {
            non[i].classList = " menu "
            non[i].children[0].classList = "h1BeforeClick";
            non[i].style.overflow = "hidden";
            non[i].style.paddingLeft = "0px";
        }
    ths.style.display = 'none';
}