console.log('GSAP ENGINE: ', gsap);
const img1 = document.querySelector('.img1');

// EASING IN GSAP: See more at https://gsap.com/docs/v3/Eases
gsap.from(img1, {autoAlpha: 0, y: -100, rotation: 90, ease: 'bounce', duration: 2});

