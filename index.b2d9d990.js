var $dad545c909cfec2d$exports = {};
var $dad545c909cfec2d$var$tml = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$dad545c909cfec2d$var$tml.to("body", {
    ease: "Power1.easeInOut"
});
$dad545c909cfec2d$var$tml.to(".preloader_lottie", {
    opacity: 1,
    ease: "Power1.easeInOut"
});
$dad545c909cfec2d$var$tml.to(".section_home-header1, .fab", {
    opacity: 1,
    y: 0,
    ease: "Power1.easeInOut"
}, "-=0.8").to(".nav_component", {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    scale: 0.8,
    borderRadius: 50,
    padding: 20,
    ease: "Power1.easeInOut"
}, "-=0.6").to(".header_wrapper", {
    opacity: 1,
    ease: "Power1.easeInOut",
    margin: 0
}, "-=0.8").to(".header_lottie-component1", {
    margin: "12",
    ease: "Power2.easeInOut"
});
gsap.registerPlugin(ScrollTrigger);
let $dad545c909cfec2d$var$inttl = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$dad545c909cfec2d$var$inttl.to(".jg", {
    opacity: 1,
    scale: 1,
    ease: "Power.easeInOut"
}).to(".intro_image", {
    opacity: 1,
    scale: "1",
    ease: "Power.easeInOut"
}).to(".home-intro_heading", {
    opacity: 1,
    ease: "Power.easeInOut",
    margin: "0",
    stagger: 0.1
}, "-=0.3").to(".home-intro_text-container", {
    opacity: 1,
    ease: "Power2.easeInOut",
    margin: "0",
    stagger: 0.1
}, "-=0.6").to(".intro_button-container", {
    opacity: 1,
    ease: "Power2.easeInOut",
    margin: "0",
    stagger: 0.1
}, "-=0.5");
ScrollTrigger.create({
    trigger: ".home-header_btn-container",
    start: "bottom 200%",
    end: "+=500",
    animation: $dad545c909cfec2d$var$inttl
});
let $dad545c909cfec2d$var$mctl = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$dad545c909cfec2d$var$mctl.to(".marquee-scroll", {
    x: "-100%",
    duration: 30,
    ease: "linear",
    repeat: -1 // Infinite loop
});
let $dad545c909cfec2d$var$inttlef = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$dad545c909cfec2d$var$inttlef.to(".course-about_content-container", {
    opacity: 1,
    scale: 0.7,
    ease: "Power.easeInOut",
    margin: "0"
}, "-=0.2");
ScrollTrigger.create({
    trigger: ".marquee-scroll",
    start: "bottom 20%",
    end: "+=1500",
    animation: $dad545c909cfec2d$var$inttlef
});
let $dad545c909cfec2d$var$inttleffiv = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$dad545c909cfec2d$var$inttleffiv.to(".fivedis", {
    scale: 0.9,
    ease: "Power.easeInOut",
    margin: "0"
}, "-=0.2");
ScrollTrigger.create({
    trigger: ".prodout",
    start: "bottom 180%",
    end: "+=1500",
    animation: $dad545c909cfec2d$var$inttleffiv,
    scrub: true
});
let $dad545c909cfec2d$var$swptl = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$dad545c909cfec2d$var$swptl.to(".card-swiper", {
    opacity: 1,
    ease: "Power.easeInOut"
}, "-=0.2");
ScrollTrigger.create({
    trigger: ".course-about_wrapper",
    start: "bottom 90%",
    end: "+=500",
    animation: $dad545c909cfec2d$var$swptl
});
let $dad545c909cfec2d$var$stcd = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$dad545c909cfec2d$var$stcd.to("#webd", {
    margin: "0",
    opacity: 1,
    ease: "Power.easeInOut",
    stagger: 0.1
}, "-=0.10").to("#aut", {
    margin: "0",
    opacity: 1,
    ease: "Power.easeInOut",
    stagger: 0.1
}, "-=0.9").to("#emb", {
    margin: "0",
    opacity: 1,
    ease: "Power.easeInOut",
    stagger: 0.1
}, "-=0.8");
ScrollTrigger.create({
    trigger: ".structure_time-content-wrapper",
    start: "top 60%",
    end: "+=500",
    animation: $dad545c909cfec2d$var$stcd
});
let $dad545c909cfec2d$var$stcdtl = gsap.timeline({
    defaults: {
        duration: 1
    }
});
$dad545c909cfec2d$var$stcdtl.to(".testimonial_heading", {
    margin: "0",
    opacity: 1,
    ease: "Power.easeInOut",
    stagger: 0.1
}, "-=0.8");
ScrollTrigger.create({
    trigger: "#emb",
    start: "top 50%",
    end: "+=500",
    animation: $dad545c909cfec2d$var$stcdtl
});
let $dad545c909cfec2d$var$testscr = gsap.timeline({
    defaults: {
        duration: 2
    }
});
$dad545c909cfec2d$var$testscr.to("#tscd", {
    y: 400,
    ease: "Power.easeInOut"
});
ScrollTrigger.create({
    trigger: ".testimonial_heading",
    start: "0% 100%",
    end: "+=2500",
    animation: $dad545c909cfec2d$var$testscr,
    scrub: 1
});
document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq_item");
    faqItems.forEach((item)=>{
        const trigger = item.querySelector(".faq_trigger");
        const answerContainer = item.querySelector(".faq_answer-container");
        const iconLines = item.querySelectorAll(".faq_trigger-icon-line");
        trigger.addEventListener("click", function() {
            const isExpanded = answerContainer.style.height !== "0px" && answerContainer.style.height !== "";
            if (isExpanded) {
                // Collapse answer
                answerContainer.style.height = "0px";
                answerContainer.style.opacity = "0";
                answerContainer.style.transform = "scale(0.9)";
                iconLines[1].style.transform = "rotate(90deg)"; // Reset second line to make a "+"
            } else {
                // Expand answer
                answerContainer.style.height = answerContainer.scrollHeight + "px";
                answerContainer.style.opacity = "1";
                answerContainer.style.transform = "scale(1)";
                iconLines[1].style.transform = "rotate(0deg)"; // Rotate second line to make a "-"
            }
        });
    });
});
// relad correctly after scrolling if reloaded
window.addEventListener("load", function() {
    // Ensure the scroll position is reset to the top on page load.
    window.scrollTo(0, 0);
    // Start the preloader fade-out and page animations
    let tml = gsap.timeline({
        defaults: {
            duration: 1
        }
    });
    // Main page transition (slide in from bottom)
    tml.to(".test1", {
        opacity: 1,
        y: 0,
        ease: "Power1.easeInOut"
    }, "+=0.5");
});
// Function to hide the preloader
window.onload = function() {
    // Select the preloader element
    const preloader = document.getElementById("preloader");
    // Add a small delay to make the transition smoother (optional)
    setTimeout(()=>{
    // Add a fade-out effect (you can define a CSS transition for smoothness)
    // preloader.style.opacity = "0";
    // Wait for the fade-out transition to complete, then remove it from the DOM
    // setTimeout(() => {
    //     preloader.style.display = "none";
    // }, 500); // Adjust this to match your CSS transition duration
    }, 1000); // Optional delay before fade-out starts
};
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1
});


//# sourceMappingURL=index.b2d9d990.js.map
