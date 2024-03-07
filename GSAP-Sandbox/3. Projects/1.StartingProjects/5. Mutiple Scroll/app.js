
// ENSURE YOU USE Z-INDEX TO SET THE LAYERING FOR THE ELEMENTS
const mountainRange = document.querySelector('.home-mountains img');
const title = document.querySelector('h1');

gsap.to(mountainRange, {
    y: 100,
    scrollTrigger: {
        trigger: 'home-mountains',
        scrub: true
    }
});

gsap.to(title, {
    y: 500,
    scrollTrigger: {
        trigger: 'home-mountains',
        scrub: true
    }
})