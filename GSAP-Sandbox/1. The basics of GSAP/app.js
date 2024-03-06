console.log("GSAP ENGINE: ", gsap);
const img1 = document.querySelector(".img1");

gsap.set(img1, {opacity: 0});
gsap.set(".img2", {backgroundColor: "green"});
