console.log('GSAP ENGINE: ', gsap);

// GSAP.FROM METHOD ARGS:(targetelement,  animationObj: {})

const img1 = document.querySelector('.img1');

// autoAlpha prevents flashing images caused by opacity and visibility - set element to visibility: 0 in the css before using autoAlpha
gsap.from(img1, {autoAlpha: 0, y: -300, duration: 2});

document.querySelector('.btn').addEventListener('click', () => {
    gsap.from(img1, { autoAlpha: 0, duration: 2 });
});

