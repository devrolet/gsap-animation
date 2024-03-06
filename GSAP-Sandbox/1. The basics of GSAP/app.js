console.log("GSAP ENGINE: ", gsap);
const img1 = document.querySelector(".img1");


// TODO: Tween methods: https://gsap.com/docs/v3/GSAP/Tween
const tween = gsap.to('.img3', {y: 200});

// Delays the tween (seconds)
tween.delay(1);

tween.duration(3);


setTimeout(() => {
    // Resume your tween
    // tween.resume();

    tween.seek(2.5)
    tween.play()
}, 2000);

// Kills the tween
// tween.kill();