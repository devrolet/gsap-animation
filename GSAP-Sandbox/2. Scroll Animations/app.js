gsap.from('.b2 h2', {
    duration: 1,
    autoAlpha: 0, 
    y: 100,
    scale: 0.5,
    scrollTrigger: {
        trigger: ".b2 h2",
        markers: true,
        // Trigger Scroller
        start: "top 50%", // "top bottom" is default value "top 50%" is 50% of the page "top center+=100" is 100px down from center
        end: "bottom top"
    }
})