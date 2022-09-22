const arrowRight = document.querySelector('.slider-arrow-right');
const arrowLeft = document.querySelector('.slider-arrow-left');
const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.indicator-dot');
let dotIndex = 1;

const changeActiveDot = (index) => {
    for (let dot of dots) {
        dot.classList.remove('dot-active')
    }
    dots[index].classList.add('dot-active');
};

function moveFromLeft() {
    carousel.classList.add('transition-from-left');
    arrowLeft.removeEventListener('click', moveFromLeft);
    arrowRight.removeEventListener("click", moveFromRight);

    if (window.screen.availWidth < 420) {
        arrowLeft.classList.add('slider-arrow-active');
    };

    if (dotIndex > 0) {
        dotIndex = dotIndex -1;
    } else {
        dotIndex = 2;
    };
    
    changeActiveDot(dotIndex);
};

function moveFromRight() {
    carousel.classList.add('transition-from-right');
    arrowLeft.removeEventListener('click', moveFromLeft);
    arrowRight.removeEventListener("click", moveFromRight);
    if (window.screen.availWidth < 420) {
        arrowRight.classList.add('slider-arrow-active');
    };

    if (dotIndex < 2) {
        dotIndex = dotIndex +1;
    } else {
        dotIndex = 0;
    };
    changeActiveDot(dotIndex);
};

arrowLeft.addEventListener('click', moveFromLeft);
arrowRight.addEventListener('click', moveFromRight);

const createLastElement = () => {
    let lastSlide = document.createElement('div');
    lastSlide.classList.add('slider-img');
    lastSlide.innerHTML = carousel.firstElementChild.innerHTML;
    return lastSlide;
};

const createFirstElement = () => {
    let firstSlide = document.createElement('div');
    firstSlide.classList.add('slider-img');
    firstSlide.innerHTML = carousel.lastElementChild.innerHTML;
    return firstSlide;
};

carousel.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'move-from-left') {
        carousel.classList.remove('transition-from-left');
        carousel.insertBefore(createFirstElement(), carousel.firstElementChild);
        carousel.lastElementChild.remove();
        arrowLeft.classList.remove('slider-arrow-active');
    } else {
        carousel.classList.remove('transition-from-right');
        carousel.appendChild(createLastElement());
        carousel.firstElementChild.remove();
        arrowRight.classList.remove('slider-arrow-active');
    };

    arrowLeft.addEventListener('click', moveFromLeft);
    arrowRight.addEventListener('click', moveFromRight);
});


// .slider-arrow-active