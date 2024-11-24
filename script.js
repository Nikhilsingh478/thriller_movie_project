// Initialize Locomotive Scroll for smooth scrolling
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
//   multiplier: 1,
// });

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");

  // Toggle navbar on hamburger click
  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}
)


  // GSAP animation for navbar links
  gsap.from(".nav-links li", {
    opacity: 0,
    y: -20,
    stagger: 0.2,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
  });

  // GSAP animation for the main content in the video section
  gsap.from(".content h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
    ease: "power3.out",
  });
  gsap.from(".content p", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1.2,
    ease: "power3.out",
  });

  // GSAP animation for production section elements
  gsap.from(".production-item", {
    scrollTrigger: {
      trigger: ".production-section",
      start: "top 80%",
      end: "bottom 60%",
      scrub: 1,
    },
    opacity: 0,
    y: 30,
    stagger: 0.3,
    ease: "power2.out",
  });

