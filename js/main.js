// burger show/hide function

(function () {
    const burgerItem = document.querySelector('.burger');
    const headerNav = document.querySelector('.header-nav');
    const headerMenuClose = document.querySelector('.header-menu-close-x');
    const overlay = document.querySelector('.header-nav-overlay');
    const accountLink = document.querySelector('.account-link');
    const navLink1 = document.querySelector('.nav-link1');
    const navLink2 = document.querySelector('.nav-link2');
    const navLink3 = document.querySelector('.nav-link3');
    const navLink4 = document.querySelector('.nav-link4');
    const navLink5 = document.querySelector('.nav-link5');

    burgerItem.addEventListener('click', () => {
        headerNav.classList.add('header-nav-active');
        overlay.classList.add('overlay-active');
    });
    headerMenuClose.addEventListener('click', () => {
        headerNav.classList.remove('header-nav-active');
        overlay.classList.remove('overlay-active');
    });
    overlay.addEventListener('click', () => {
        headerNav.classList.remove('header-nav-active');
        overlay.classList.remove('overlay-active');
    });
    accountLink.addEventListener('click', () => {
        headerNav.classList.remove('header-nav-active');
        overlay.classList.remove('overlay-active');
    });
    navLink1.addEventListener('click', () => {
        headerNav.classList.remove('header-nav-active');
        overlay.classList.remove('overlay-active');
    });
    navLink2.addEventListener('click', () => {
        headerNav.classList.remove('header-nav-active');
        overlay.classList.remove('overlay-active');
    });
    navLink3.addEventListener('click', () => {
        headerNav.classList.remove('header-nav-active');
        overlay.classList.remove('overlay-active');
    });
    navLink4.addEventListener('click', () => {
        headerNav.classList.remove('header-nav-active');
        overlay.classList.remove('overlay-active');
    });
    navLink5.addEventListener('click', () => {
        headerNav.classList.remove('header-nav-active');
        overlay.classList.remove('overlay-active');
    });
}());

const body = document.querySelector('body');
const headerLoginButton = document.querySelector('.header-btn-login');
const popUp = document.querySelector('.login-popup');
const popupContent = document.querySelector('.login-popup-content');
const signupContent = document.querySelector('.signup-content');
const register = document.querySelector('.register-span');
const logIn = document.querySelector('.log-in-span');
const accountLink = document.querySelector('.account-link');


function popupSwitcher () {
    popUp.classList.toggle('visible');
    popupContent.classList.toggle('show');
    body.classList.toggle('overflow-hidden');
};

headerLoginButton.addEventListener('click', popupSwitcher);
accountLink.addEventListener('click', popupSwitcher);

function toggleSignUp() {
    popupContent.classList.toggle('unvisible');
    signupContent.classList.toggle('unvisible');
};

register.addEventListener('click', toggleSignUp);
logIn.addEventListener('click', toggleSignUp);

popUp.addEventListener('click', (event) => {
    if (event.target.classList.contains('login-popup')) {
        popUp.classList.remove('visible');
        popupContent.classList.remove('show');
        signupContent.classList.add('unvisible');
        popupContent.classList.remove('unvisible');
        body.classList.remove('overflow-hidden');
    };
});

const signIn = document.querySelector('.popup-sign-in-btn');

signIn.addEventListener('click', () => {
    const email = document.querySelector('.e-mail-input');
    const password = document.querySelector('.password-input');
    alert(`E-mail: ${email.value}, Password: ${password.value}`);
});

// Slider -Slider -Slider -Slider
// const sliderContainer = document.querySelector('.slider-container');
// const arrowLeft =document.querySelector('.slider-arrow-left');
// const arrowRight = document.querySelector('.slider-arrow-right');
// const dot = document.querySelector('.indicator-dot');

// let slides = document.querySelectorAll('.item');
// let currentSlide = 1;
// let isEmabled = true;

// function changeCurrentslide(n) {
//     currentSlide = (n + slides.length) % slides.length;
// }



// function hideSlide(direction) {
//     isEmabled = false;
//     slides[currentSlide].classList.add(direction);
//     slides[currentSlide].addEventListener('animationend', function () {
//         this.classList.remove('active', direction)
//     });
// };

// function ShowSlide(direction) {
//     slides[currentSlide].classList.add('next', direction);
//     slides[currentSlide].addEventListener('animationend', function () {
//         this.classList.remove('next', direction);
//         this.classList.add('active');
//         isEmabled = true;
//     });
// };

// function previousSlide(n) {
//     hideSlide('to-right');
//     changeCurrentslide(n - 1);
//     ShowSlide('from-left');
// };

// function nextSlide(n) {
//     hideSlide('to-left');
//     changeCurrentslide(n + 1);
//     ShowSlide('from-right');
// };

// arrowLeft.addEventListener('click', function () {
//     if (isEmabled) {
//         previousSlide(currentSlide);
//     }
// });  

// arrowRight.addEventListener('click', function () {
//     if (isEmabled) {
//         nextSlide(currentSlide);
//     }
// });

