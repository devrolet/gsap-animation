console.log("GSAP ENGINE: ", gsap);

// TIMELINES IN GSAP (Greensock Animation Platform)
const TL = gsap.timeline({
    defaults: {
        duration: 1,
        ease: "power4"
    },
    // repeat: -1,
    // yoyo: true,
    onComplete: () => console.log("COMPLETE"),
    onStart: () => console.log("START")

});

// Timeline: Position parameters ("+/-=number", "< or >", 3 (absolute)). Set by seconds
TL
.from('.img1', {autoAlpha: 0, y: -50})
.from('.img2', {autoAlpha: 0, y: -50}) // add third arg if you want TL to trigger something early(-) or later(+).
.from('.img3', {autoAlpha: 0, y: -50})
.from('h1', {autoAlpha: 0, y: 50})
.from('p', {autoAlpha: 0, y: 50});