console.log("GSAP ENGINE: ", gsap);
const img1 = document.querySelector(".img1");

// Animate random values, Stagger group of buttons
// gsap.to(".btn", { 
//     duration: 0.5, 
//     stagger: 0.2, 
//     x: "random(-100, 100)" // adding another # like 10 will round the random number by 10
//     // you can also add an array. for example x: "random([20, 50, 60, -30, -70])"
// });

gsap.to(img1, {keyframes: [
    {duration: 0.3, x: 100},
    {duration: 0.3, y: 100},
    {duration: 0.3, x: 200},
]});
