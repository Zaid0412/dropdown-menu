const body = document.querySelector("body");
const toggleThemeBtn = document.querySelector(".theme-toggler");
const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");
const dotIcons = document.querySelectorAll(".dot-icon");

//  function that add class "dark" to body
function changeTheme() {
  body.classList.toggle("dark");
  rightArrow.classList.toggle("dark-icon");
  leftArrow.classList.toggle("dark-icon");
}

///////////////////////   //////////////////////////////////////

//  Slider //
const slider = document.slidea;
const sliderDelay = 5000;
let i = 0;
let images = [
  "./imgs/pic-1.jpg",
  "./imgs/pic-2.jpg",
  "./imgs/pic-3.jpg",
  "./imgs/pic-4.jpg",
  "./imgs/pic-5.jpg",
];

function nextSlide() {
  if (i < images.length - 1) {
    slider.src = images[++i];
    activateDot(i);
  } else {
    i = 0;
    slider.src = images[i];
    activateDot(i);
  }
}

function prevSlide() {
  if (i != 0) {
    slider.src = images[--i];
    activateDot(i);
  } else {
    i = images.length - 1;
    slider.src = images[i];
    activateDot(i);
  }
}

function changeSlide() {
  slider.src = images[i];
  activateDot(i);

  if (i < images.length - 1) i++;
  else i = 0;
  setTimeout(changeSlide, sliderDelay);
}

function goToSlide(i) {
  slider.src = images[i];
}

changeSlide();

//  Activate dots //

function activateDot(i) {
  for (const dot of dotIcons) {
    // dot.classList.remove("activate-dot");
    dot.classList.remove("active-dot");
    if (i == dot.dataset.dot) {
      dot.classList.add("active-dot");
    }
  }
}

//////////////////////////////////////////////////////////////////////////////

//  calls changeTheme when toggleThemeBtn is clicked
toggleThemeBtn.addEventListener("click", changeTheme);

rightArrow.addEventListener("click", nextSlide);
leftArrow.addEventListener("click", prevSlide);

for (const dot of dotIcons) {
  dot.addEventListener("click", () => {
    const curDot = dot.dataset.dot;
    goToSlide(curDot);
    activateDot(curDot);
  });
}
