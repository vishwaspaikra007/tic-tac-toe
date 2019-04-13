var content = (ths,id) => {
    setTimeout(() => {
        const mess = document.querySelector(id + " h1");
        mess.classList = "h1AfterClick";
        // alert(mess.innerHTML);
    }, 500);
}