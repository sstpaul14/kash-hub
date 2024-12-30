const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Clone the first and last images for seamless looping
const firstClone = images[0].cloneNode(true);
const lastClone = images[images.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

carouselSlide.appendChild(firstClone); // Add the first clone to the end
carouselSlide.insertBefore(lastClone, images[0]); // Add the last clone to the beginning

let counter = 1; // Start at the first real image
const size = images[0].clientWidth; // Use the width of an image

// Update images NodeList after clones are added
const updatedImages = document.querySelectorAll('.carousel-slide img');

// Set the initial position
carouselSlide.style.transform = `translateX(${-size * counter}px)`;

// Move to the next image
function moveToNext() {
    if (counter >= updatedImages.length - 1) return; // Prevent going out of bounds
    counter++;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

// Move to the previous image
function moveToPrev() {
    if (counter <= 0) return; // Prevent going out of bounds
    counter--;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

// Reset the position for seamless looping
carouselSlide.addEventListener('transitionend', () => {
    if (updatedImages[counter].id === 'first-clone') {
        carouselSlide.style.transition = "none"; // Disable transition
        counter = 1; // Reset to the first real image
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
    if (updatedImages[counter].id === 'last-clone') {
        carouselSlide.style.transition = "none"; // Disable transition
        counter = updatedImages.length - 2; // Reset to the last real image
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
});

// Event listeners for navigation buttons
nextButton.addEventListener('click', moveToNext);
prevButton.addEventListener('click', moveToPrev);

// Auto-cycle the carousel
setInterval(() => {
    moveToNext();
}, 5000);
