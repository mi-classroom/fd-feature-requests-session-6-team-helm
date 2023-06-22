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
  