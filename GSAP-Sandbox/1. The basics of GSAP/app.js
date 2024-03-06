console.log("GSAP ENGINE: ", gsap);

// TIMELINES IN GSAP
const TL = gsap.timeline();

TL
.from('.img1', {autoAlpha: 0, y: -50, duration: 2})
.from('.img2', {autoAlpha: 0, y: -50, duration: 2})
.from('.img3', {autoAlpha: 0, y: -50, duration: 2})
.from('h1', {autoAlpha: 0, y: 50, duration: 2})
.from('p', {autoAlpha: 0, y: 50, duration: 2});