gsap.from('.b2 h2', {
    duration: 1,
    autoAlpha: 0, 
    y: 100,
    scale: 0.5,
    scrollTrigger: {
        trigger: ".b2 h2",
        markers: true,
        // Trigger Scroller
        start: "top 80%", // "top bottom" is default value "top 50%" is 50% of the page "top center+=100" is 100px down from center
        end: "bottom 30%",
        // onEnter onLeave onEnterBack onLeaveBack
        toggleActions: "play pause reverse reset",
        // play pause resume reset restart complete reverse none
        onEnter: () => console.log("ENTER"),
        onLeave: () => console.log("LEAVE"),
        onEnterBack: () => console.log("ENTERBACK"),
        onLeaveBack: () => console.log("LEAVEBACK"),
        scrub: 1
    }
})