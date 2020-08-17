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
const s3 = document.querySelector(".s3");

//ENTER GALLERY ELEMENTS

const gallery_enter = document.querySelector(".gallery_enter");
const gallery_the = document.querySelector(".gallery_the");
const gallery_gallery = document.querySelector(".gallery_gallery");

//ANIMATIONS GSAP

gsap.fromTo(
  gallery_enter,
  { x: "-=1700", opacity: 0 },
  {
    x: "300",
    opacity: 1,
    scrollTrigger: {
      trigger: "s3",
      start: "top 40%",
      scrub: 0.7,
    },
  }
);

gsap.fromTo(
  gallery_the,
  { opacity: 0 },
  {
    opacity: 1,
    scrollTrigger: {
      trigger: "s3",
      start: "top -80%",
      scrub: 0.2,
    },
  }
);

gsap.fromTo(
  gallery_gallery,
  { x: "+=1700", opacity: 0 },
  {
    x: "-200",
    opacity: 1,
    scrollTrigger: {
      trigger: "s3",
      start: "top 40%",
      scrub: 0.7,
    },
  }
);
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
