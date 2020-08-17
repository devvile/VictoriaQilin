//GSAP
gsap.registerPlugin(ScrollTrigger);

//ELEMENTS

const logoV = document.getElementById("logoV");
const logoQ = document.getElementById("logoQ");
const welcome_text = document.querySelector(".welcome_text");
const navbar = document.querySelector(".navbar");
const arrowRight = document.querySelector(".bar_arrow_right");
const shopThumb = document.querySelector(".shopThumb");
const shopText = document.querySelector(".shopText");

//ENTER GALLERY ELEMENTS

const galleryHeadings = document.querySelectorAll("gallery__heading");

//ANIMATIONS GSAP

//SETUP
TweenMax.set([logoV, logoQ, welcome_text, shopText, arrowRight], {
  visibility: "visible",
});
TweenMax.set([navbar, shopThumb, shopText], {
  visibility: "visible",
  x: 430,
});

//FUNC
function unblock() {
  setTimeout(() => {
    document.body.style.overflow = "auto";
  }, 4000);
}

//ANIM LANDING
TweenMax.to(logoV, 1.5, { opacity: 1 });
TweenMax.to(logoQ, 1.5, { opacity: 1, delay: 1 });
TweenMax.to(welcome_text, 1.5, { opacity: 1, delay: 2 });
TweenMax.to(navbar, 0.75, { x: 0, delay: 3 });
TweenMax.to(shopThumb, 0.75, { x: -15, delay: 3.5 });
TweenMax.to(shopThumb, 0.2, { x: 40, delay: 4.15 });
TweenMax.to(shopThumb, 0.3, { x: 0, delay: 4.3 });
TweenMax.to(shopText, 0.5, { x: 0, delay: 4.8 });
TweenMax.to(arrowRight, 0.5, { opacity: 1, delay: 5.3 });

//SCROLL ANIM GALLERY

unblock();
