console.log("GSAP ENGINE: ", gsap);
const img1 = document.querySelector(".img1");

// Stagger
gsap.from('img', {
  autoAlpha: 0,
  y: -100,
  ease: "power4",
  duration: 2,
//   stagger: 0.5 // staggers one after other with 0.5 delay
  stagger: {
    each: 0.5,
    from: "end" // end and center
    // amount: 1
  }
});
