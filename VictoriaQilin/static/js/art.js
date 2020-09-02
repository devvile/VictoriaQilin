//GSAP
gsap.registerPlugin(ScrollTrigger);

//ELEMENTS

//FIRST PAGE

const logoV = document.getElementById("logoV");
const logoQ = document.getElementById("logoQ");
const vixiaQ = document.getElementById("vixiak");
const welcome_text = document.querySelector(".welcome_text");
const navbar = document.querySelector(".navbar");
const arrowRight = document.querySelector(".bar_arrow_right");
const shopThumb = document.querySelector(".shopThumb");
const shopText = document.querySelector(".shopText");
const instaIcon = document.querySelector(".sociale__insta");
const fbIcon = document.querySelector(".sociale__fb");

//OTHERS
const s3 = document.querySelector(".s3");

//ENTER GALLERY ELEMENTS

const gallery_enter = document.querySelector(".gallery_enter");
const gallery_the = document.querySelector(".gallery_the");
const gallery_gallery = document.querySelector(".gallery_gallery");

//SETUP
TweenMax.set(
  [logoV, logoQ, welcome_text, shopText, arrowRight, fbIcon, instaIcon, vixiaQ],
  {
    visibility: "visible",
  }
);
TweenMax.set([navbar, shopThumb, shopText], {
  visibility: "visible",
  x: 430,
});
TweenMax.set(instaIcon, { x: 1000 });
TweenMax.set(fbIcon, { x: -1000 });
TweenMax.set(vixiaQ, { x: -1000 });

//ANIM LANDING

function frontAnimate() {
  TweenMax.to(logoV, 1.5, { opacity: 1, delay: 0.4 });
  TweenMax.to(logoQ, 1.5, { opacity: 1, delay: 1.2 });
  TweenMax.to(navbar, 0.75, { x: 0, delay: 2.0 });
  TweenMax.to(shopThumb, 0.75, { x: -15, delay: 2.5, ease: "easeIn" });
  TweenMax.to(shopThumb, 0.2, { x: 40, delay: 3.15, ease: "easeInOut" });
  TweenMax.to(shopThumb, 0.3, { x: 0, delay: 3.3 });
  TweenMax.to(shopText, 0.5, { x: 0, delay: 3.5, ease: "easeOut" });
  TweenMax.to(arrowRight, 0.5, { opacity: 1, delay: 4.1 });
  TweenMax.to(vixiaQ, 0.7, { opacity: 1, x: 0, delay: 4.5 });
  TweenMax.to([fbIcon, instaIcon], 0.5, { x: 0, delay: 4.8, ease: "easeOut" });
  TweenMax.to(welcome_text, 2.8, { opacity: 1, delay: 5.5 });
}

//ANIMATIONS GSAP

gsap.fromTo(
  gallery_enter,
  { x: "-=1700", opacity: 0 },
  {
    x: 350,
    opacity: 1,
    scrollTrigger: {
      trigger: "s3",
      start: "top 40%",
      scrub: 0.7,
    },
  }
);

gsap.fromTo(
  gallery_gallery,
  { x: "+=1700", opacity: 0 },
  {
    x: -275,
    opacity: 1,
    scrollTrigger: {
      trigger: "s3",
      start: "top 40%",
      scrub: 0.7,
    },
  }
);

//FUNC
function unblock() {
  setTimeout(() => {
    document.body.style.overflow = "auto";
  }, 4000);
}

//SCROLL ANIM GALLERY
$("html, body").animate({ scrollTop: 0 }, "fast");
$(document).ready(frontAnimate());
unblock();
