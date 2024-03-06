console.log('GSAP ENGINE: ', gsap);
const img1 = document.querySelector('.img1');


// gsap.from(img1, {autoAlpha: 0, rotation: 45, scale: 0.5, x: 100, y: 100, duration: 2});

document.querySelector('.btn').addEventListener('click', () => {
gsap.from(img1, {autoAlpha: 0}, {autoAlpha: 1, duration: 2});
});

