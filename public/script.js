// NAVBAR
const iconButton = document.getElementById('icon');
const home = document.getElementById('home');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const experiences = document.getElementById('experiences');

function toggleNavbar() {
    let x = document.getElementById("navbar");
    if (x.className === "link") {
        x.className += " responsive";
    } else {
        x.className = "link";
    }
}

iconButton.addEventListener('click' , toggleNavbar);
home.addEventListener('click' , toggleNavbar);
about.addEventListener('click' , toggleNavbar);
skills.addEventListener('click' , toggleNavbar);
experiences.addEventListener('click' , toggleNavbar);
// NAVBAR

// MAIN
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dotButton1 = document.getElementById('dot1');
const dotButton2 = document.getElementById('dot2');
const dotButton3 = document.getElementById('dot3');
const dotButton4 = document.getElementById('dot4');
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

prev.addEventListener('click' , function(){
    plusSlides(-1);
});
next.addEventListener('click', function(){
    plusSlides(1);
})
dotButton1.addEventListener('click', function(){
    currentSlide(1);
})
dotButton2.addEventListener('click', function(){
    currentSlide(2);
})
dotButton3.addEventListener('click', function(){
    currentSlide(3);
})
dotButton4.addEventListener('click', function(){
    currentSlide(4);
})
// MAIN

