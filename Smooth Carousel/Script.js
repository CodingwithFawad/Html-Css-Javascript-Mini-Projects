// Select the carousel element and convert its children into an array
const carousel = document.querySelector('.carousel');
const items = Array.from(carousel.children);

// Clone each carousel item for seamless looping
items.forEach(item => {
  // Clone each carousel item (true means a deep clone, including child nodes)
  const clone = item.cloneNode(true);
  // Append the clone to the carousel, effectively duplicating the items
  carousel.appendChild(clone);
});

// Initialize a variable to track the scroll amount
let scrollAmount = 0;
// Set the scrolling speed (increase the value for faster scrolling)
const speed = 1; // Adjust for faster/slower scrolling

// Function to scroll the carousel continuously
function scrollCarousel() {
  // Increase the scrollAmount by the speed value
  scrollAmount += speed;

  // Check if the scrollAmount has reached halfway through the carousel (for seamless looping)
  if (scrollAmount >= carousel.scrollWidth / 2) {
    // Reset scrollAmount to 0 to loop back to the start
    scrollAmount = 0;
  }

  // Apply the translation to move the carousel horizontally based on scrollAmount
  carousel.style.transform = `translateX(-${scrollAmount}px)`;

  // Use requestAnimationFrame to ensure smooth continuous scrolling
  requestAnimationFrame(scrollCarousel);
}

// Start the scrolling animation
scrollCarousel();
