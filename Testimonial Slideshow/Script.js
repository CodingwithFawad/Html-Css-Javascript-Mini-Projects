let slideIndex = 0; // Tracks the index of the current slide
const slides = document.getElementsByClassName("testimonial-slide"); // Collects all slides with the class "testimonial-slide"

// Initialize slideshow
showSlides(slideIndex); // Displays the first slide initially

// Next/previous controls
function changeSlide(n) {
  // Changes the slide based on input (n) and updates the index
  showSlides(slideIndex += n);
}

// Display slides
function showSlides(n) {
  // Checks if slide index exceeds total slides and loops back to the first slide
  if (n >= slides.length) slideIndex = 0;
  // Checks if slide index goes below 0 and loops back to the last slide
  if (n < 0) slideIndex = slides.length - 1;

  // Hides all slides initially
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Sets display to "none" for all slides
  }

  // Displays the current slide based on slideIndex
  slides[slideIndex].style.display = "block";
}

// Auto slide every 5 seconds
setInterval(() => changeSlide(1), 5000); // Automatically moves to the next slide every 5 seconds

