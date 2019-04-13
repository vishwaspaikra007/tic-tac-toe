var closeMenu = (ths) => {
    var non = document.querySelectorAll(".menu");
    for(i=0;i<non.length;i++)
        {
            non[i].classList = " menu "
            non[i].children[0].classList = "h1BeforeClick";
        }
    ths.style.display = 'none';
}