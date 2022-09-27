

const slides = document.querySelectorAll('.slide');
const nextSlide = document.querySelector('.next');
const prevSlide = document.querySelector('.previous')
let currSlide = 0;
let lastSlide = slides.length - 1;

// ----------------------------

// ---------------carousel functions-----------
const slideNext =  nextSlide => {
        if (currSlide === lastSlide) {
                currSlide = 0;
        } else {
                currSlide++;
        }
        slides.forEach((slide, indx) => {
                slide.style.transform = `translateX(${100 * (indx - currSlide)}%)`;
        })
}

slides.forEach((slide,indx) => {
        slide.style.transform = `translateX(${indx * 100}%)`;
})


// --------------carousel events--------------
nextSlide.addEventListener('click', slideNext)

prevSlide.addEventListener('click', function() {
        if (currSlide === 0) {
                currSlide = lastSlide;
        } else {
                currSlide--; 
        }
        slides.forEach((slide, indx) => {
                slide.style.transform = `translateX(${100 * (indx - currSlide)}%)`;
        });
})       

// ---------carousel auto timer function--------
window.onload = function () {      
        setInterval(slideNext, 7000);
};


// })
// ();