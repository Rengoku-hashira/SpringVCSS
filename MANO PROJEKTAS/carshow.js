document.getElementById('search-icon').addEventListener('click', function() {
    var query = document.getElementById('search-input').value;
    if (query) {
        alert('Searching for:' + query);
    } else {
        alert('Please enter a search term');
    }
});






let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides / 2) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = Math.floor(totalSlides / 2) - 1;
  } else {
    currentSlide = index;
  }
  const sliderWidth = document.querySelector('.slider').clientWidth;
  const newTransform = -currentSlide * (sliderWidth / 2);
  document.querySelector('.slides').style.transform = `translateX(${newTransform}px)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

setInterval(nextSlide, 5000); // Change slide every 3 seconds






















// let currentSlide = 0;

// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;

// function showSlide(index) {
//   if (index >= totalSlides / 2) {
//     currentSlide = 0;
//   } else if (index < 0) {
//     currentSlide = totalSlides / 2 - 1;
//   } else {
//     currentSlide = index;
//   }
//   const sliderWidth = document.querySelector('.slider').clientWidth;
//   const newTransform = -currentSlide * (sliderWidth / 2);
//   document.querySelector('.slides').style.transform = `translateX(${newTransform}px)`;
// }

// function nextSlide() {
//   showSlide(currentSlide + 1);
// }

// function prevSlide() {
//   showSlide(currentSlide - 1);
// }

// setInterval(nextSlide, 3000); 