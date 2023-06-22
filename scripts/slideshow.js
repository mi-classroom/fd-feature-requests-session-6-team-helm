<<<<<<< HEAD
var controls = document.querySelectorAll(".controls");
for (var i = 0; i < controls.length; i++) {
  controls[i].style.display = "inline-block";
}

var slides = document.querySelectorAll("#slideshow-recipes ul");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = "slide";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = "slide showing";
}

var playing = true;
var pauseButton = document.getElementById("pause");

function pauseSlideshow() {
  pauseButton.innerHTML = "&#9658;"; // play character
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = "&#10074;&#10074;"; // pause character
  playing = true;
  slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.onclick = function () {
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};

var next = document.getElementById("next");
var previous = document.getElementById("previous");

next.onclick = function () {
  pauseSlideshow();
  nextSlide();
};
previous.onclick = function () {
  pauseSlideshow();
  previousSlide();
};
=======
document.addEventListener("DOMContentLoaded", function(event) {
    var slides = document.querySelectorAll("#slideshow-recipes .slideshow-container li");
    var currentSlide = 0;
  
    function showSlide(n) {
      slides[currentSlide].style.display = "none";
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].style.display = "block";
    }
  
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function previousSlide() {
      showSlide(currentSlide - 1);
    }
  
    var nextBtn = document.getElementById("nextBtn");
    var prevBtn = document.getElementById("prevBtn");
  
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", previousSlide);
  
    showSlide(currentSlide);
  });
  
>>>>>>> 615883cdc31adca28eefd689f70c42c4a368f19a
