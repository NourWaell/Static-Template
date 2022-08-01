let span = document.querySelector(".stotop");
window.onscroll = function () {
    this.scrollY ? span.classList.add("show") : span.classList.remove("show");
};
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};