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

let toggler = document.querySelector(".toggle");
let mega = document.querySelector(".mega-menu");
let close = document.querySelector(".close-mega");

close.onclick = function () {
  mega.classList.remove("open-mega");
};

toggler.onclick = function () {
  if (mega.classList.contains("open-mega")) {
    mega.classList.remove("open-mega");
  } else {
    mega.classList.add("open-mega");
  }
};

var lis = document.querySelectorAll("li:not(:last-child)");
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function (e) {
    if (e.target && mega.classList.contains("open-mega")) {
      mega.classList.remove("open-mega");
    }
  });
}
