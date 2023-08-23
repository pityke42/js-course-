'use strict';


const h1 = document.querySelector(' h1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
//buttons
const btnScrollTo = document.querySelector('.btn--scroll-to');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
//sections
const allSection = document.querySelectorAll('.section');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
//tabs
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
//buttons
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
//sliders
///////////////////////////////////////


// Modal window
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};





//BUTTONS
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//Button Scrolling
btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

//Getting the coordinates for scrolling
  console.log(e.target.getBoundingClientRect());

  //coordinates of the viewport
  // console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);
  // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset,
  //    );
  
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({
    behavior: "smooth",
  })
});

//Page Navigation
///////////(EVENT DELEGATION)////////////
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){

    
//     
// });


//Event delegation
//1.Add event listener to common parent element
//2.Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();

  //Matching strategy
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});

//Tabbed components
tabsContainer.addEventListener('click', function(e){
  //Selecting the tabs
  const clicked = e.target.closest('.operations__tab');
  
  //Ignore when click cause null//Guard clause
  if(!clicked) return;
  // if(!clicked){
  //   clicked.classList.toggle('operations__tab--active')
  // };

  //Activating tabs
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //Activating containers
  tabsContent.forEach(content => content.classList.remove('operations__content--active'));

  //Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

//Menu fade animation
const handleHover = function(e){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//Passign an argument into handler
//fading out to => opacity 0.5
nav.addEventListener('mouseover', handleHover.bind(0.5));
//fading back in back to => opactiy 1
nav.addEventListener('mouseout', handleHover.bind(1));


//Sticky naviogation
const initialCords = section1.getBoundingClientRect()

window.addEventListener('scroll', function(e){
  //Adding sticky class
  if(window.scrollY > initialCords.top){
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

/*

//Sticky navigation: Intersection Observer API
//this callback function is called when the section is threshold % viewable in the browsers window
const obsCallback = function(entries, observer){
  entries.forEach(entry => {
    console.log(entry)
  })
};

//(Threshold) section viewable surface in percent
const obsOptions = {
  root: null,
  threshold: [0, 0.2, ],
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
*/
//1. argument is the wanted to triggered callback function when the //2. arguments options (threshold%) 
//are avaliable (viewable in the browsers window)
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function(enrties){
  const [entry] = enrties;

  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');

};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${-navHeight}px`,

});

headerObserver.observe(header);

//Reveal hidden sections
const allSections = document.querySelectorAll('.section');
const revealSection = function(entries, observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target)
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,

});

allSection.forEach(function(section){
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});


//Lazy loading images
const imgTarget = document.querySelectorAll('img[data-src]');
const loadImg = function(entries, observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  

  //Remove blurry filter
  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target)
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});

imgTarget.forEach(img => imgObserver.observe(img));

//Slider
const slider = function(){
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

const maxSlide = slides.length;

const goToSlide = function(slide){
  slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%`);
};
goToSlide(0);


//Dots
const dotContainer = document.querySelector('.dots');
const createDots = function(){
  slides.forEach(function(_, i){
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
  });
};
createDots();

//Dot activating
const activateDot = function(slide){
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));

  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
};
activateDot(0);

dotContainer.addEventListener('click', function(e){
  if(e.target.classList.contains('dots__dot')){
    const {slide} = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

//Next slide
const nextSlide = function(){
  if(currentSlide === maxSlide - 1){
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  // currentSlide = 1: -100%, 0%, 100%, 200%
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

//Previous slide
const prevSlide = function(){
  if(currentSlide === 0){
    currentSlide = maxSlide - 1;
  } else {
  currentSlide--;
  }

  goToSlide(currentSlide);
  activateDot(currentSlide);
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

//Keyboard arrow navigation
document.addEventListener('keydown', function(e){
  console.log(e);
  if(e.key === 'ArrowLeft') prevSlide();
  //Short circuiting
  e.key === 'ArrowRight' && nextSlide();
});
};
slider();


////////////////////////////////////////////////////////////////////////////////////////
/*
//Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and Inserting elements
//insertAdjacentHTML
const message = document.createElement('div');////////////message is a live element live element living in the DOM
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));/////child element also be copied

header.before(message);
// header.after(message);

//Delete element
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  // message.remove();
  message.parentElement.removeChild(message);/////DOM TRAVERSING (moving in the DOM tree)
});


//STYLES
 message.style.backgroundColor = '#37383d';
 message.style.width = '120%';

 console.log(message.style.backgroundColor);
 console.log(message.style.color);
 console.log(getComputedStyle(message).color);
 console.log(getComputedStyle(message).height);

 message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

 //CSS variables (custom properties)//
 document.documentElement.style.setProperty('--color-primary', 'orangered');

 //Attributes
 const logo = document.querySelector('.nav__logo');
 console.log(logo.src); 
 console.log(logo.alt);
 console.log(logo.className);
logo.alt = 'Beautiful, minimalist logo';

 //Non standart( does not work)
 console.log(logo.designer);

 console.log(logo.getAttribute('designer'));
 logo.setAttribute('company', 'Bankist');
 
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

const link2 =document.querySelector('.nav__link--btn');
console.log(link2.href);
console.log(link2.getAttribute('href'));

//Data Attributes
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add();
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains();//not includes()

//dont use this//overwrite everything
logo.className = 'jonas';

const alertH1 = function(e){
  alert('addEventListener: Great! You are reading a heading')

  //deleting eventlistener
  h1.removeEventListener('mouseenter', alertH1);

}

h1.addEventListener('mouseenter', alertH1);


//deleting eventlistener after 3 seconds
setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1)
}, 3000);

// h1.onmouseenter = function(e){
//   alert('addEventListener: Great! You are reading a heading')
// };//oldschool one




///Event Propagation///Bubbling and Capturing
//rgb(255, 255, 255)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColour = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColour(0, 255));


document.querySelector('.nav__link').addEventListener('click', function(e){
  this.style.backgroundColor= randomColour();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  //Stop Propagation
  e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function(e){
  this.style.backgroundColor= randomColour();
  console.log('CONTAINER', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function(e){
  this.style.backgroundColor= randomColour();
  console.log('NAV', e.target, e.currentTarget);
});

///////////DOM TRAVERSING/////////////////////////////
//Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.children);
console.log(h1.childNodes);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

//Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el){
  if(el !== h1){
    el.style.transform = 'scale(0.5)';
    
  }
});

document.addEventListener('DOMContentLoaded', function(e){
  console.log('html parsed and dom tree built', e)
});
window.addEventListener('load', function(e){
  console.log('page fully loaded', e)
})
window.addEventListener('beforeunload', function(e){
  e.preventDefault(); 
  console.log(e)
  e.returnValue = '';
  
});
*/