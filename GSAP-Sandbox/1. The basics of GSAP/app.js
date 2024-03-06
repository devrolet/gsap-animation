console.log("GSAP ENGINE: ", gsap);

// TIMELINES IN GSAP (Greensock Animation Platform)
const TL = gsap.timeline();

// Timeline: Position parameters ("+/-=number", "< or >", 3 (absolute)). Set by seconds
TL
.from('.img1', {autoAlpha: 0, y: -50, duration: 1})
.from('.img2', {autoAlpha: 0, y: -50, duration: 1}, '-=0.75') // add third arg if you want TL to trigger something early(-) or later(+).
.from('.img3', {autoAlpha: 0, y: -50, duration: 1}, '<')
.from('h1', {autoAlpha: 0, y: 50, duration: 1}, '-=0.75')
.from('p', {autoAlpha: 0, y: 50, duration: 1}, '-=0.75');