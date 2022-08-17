// Scroll To Top Button
let scrollToTop = document.querySelector(".stotop");

scrollToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Mega Menu
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

// CountDown Timer
let countDownDate = new Date("Nov 20, 2022 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDifference = countDownDate - dateNow;

  let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDifference < 0) {
    clearInterval(counter);
  }
}, 1000);

// Skills Progress show when scrolling to skills section
let skillsSection = document.querySelector(".our-skills");
let skillsProgressSpans = document.querySelectorAll(".the-progress span");

// Numbers increase on scrolling to stats section
let statsSection = document.querySelector(".stats");
let numsCounting = document.querySelectorAll(".stats .number");
let functionStarted = false;

function startCount(el) {
  let numGoal = el.dataset.goal;
  let numCounter = setInterval(() => {
    el.textContent++;
    if (el.textContent == numGoal) {
      clearInterval(numCounter);
    }
  }, 700 / numGoal);
}

// The Main OnScroll Event for every scrolling function
window.onscroll = function () {
  // Scroll To Top Button
  window.scrollY >= 1000
    ? scrollToTop.classList.add("show")
    : scrollToTop.classList.remove("show");

  // Skills Section onScroll Function
  if (window.scrollY >= skillsSection.offsetTop - 250) {
    skillsProgressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  // Stats Section onScroll Function
  if (window.scrollY >= statsSection.offsetTop - 350) {
    if (!functionStarted) {
      numsCounting.forEach((num) => startCount(num));
    }
    functionStarted = true;
  }
};
