gsap.from('.b2 h2', {
    duration: 1,
    autoAlpha: 0, 
    y: 100,
    scale: 0.5,
    scrollTrigger: {
        trigger: ".b2 h2",
        markers: true
    }
})