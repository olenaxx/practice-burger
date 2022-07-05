const hamburger_menu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('header nav');
const links = document.querySelectorAll('.links')

/*----------------- burger-menu ------------------*/

function closeMenu() {
  navbar.classList.remove('open');
  document.body.classList.remove('stop-scrolling');
}

hamburger_menu.addEventListener('click', () => {
  if (!navbar.classList.contains('open')) {
    navbar.classList.add('open');
    document.body.classList.add('stop-scrolling');
  } else {
    closeMenu();
  }
})

links.forEach(link=>link.addEventListener('click', () => closeMenu()))

/*----------------- slider ------------------*/

const prev = document.getElementById('btn-prev')
const next = document.getElementById('btn-next')
const slides =document.querySelectorAll('.slide')
// const slides =[...document.querySelectorAll('.slide')]
const dots = document.querySelectorAll('.dot')

let index = 0;
// console.log(slides);

const activeSlide = n => {
  for (slide of slides) {
    slide.classList.remove('active')
  }
  slides[n].classList.add('active')
}

const activeDot = n => {
  for (dot of dots) {
    dot.classList.remove('active')
  }
  dots[n].classList.add('active')
}

const prepareCurrentSlide = ind => {
  activeSlide(ind);
  activeDot(ind);
}

const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
}

const prevSlide = () => {
  if (index === 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  })
})

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)

// setInterval(nextSlide, 2500)

/*------------------  carousel --------------------*/

let items = document.querySelectorAll('.item')
let currentItem = 0;
isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + item.length) % item.length;
}

function previousItem(n) {
  changeCurrentItem(n-1)
}

function nextItem(n) {
  changeCurrentItem(n-1)
}

document.querySelector('.control.left').addEventListener('click', function () {
  // changeCurrentItem(currentItem - 1);
  if (isEnabled) {
    previousItem(currentItem)
  }
})

document.querySelector('.control.right').addEventListener('click', function () {
  // changeCurrentItem(currentItem - 1);
  if (isEnabled) {
    nextItem(currentItem)
  }
})

// 42.28 https://www.youtube.com/watch?v=rkz6LURkbBw