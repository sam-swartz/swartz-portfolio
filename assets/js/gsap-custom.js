gsap.from(".dropBounce_content", {
    duration: 2.5,
    ease: "bounce.out",
    y: -500,

});
gsap.from(".dropBounce_content2", {
    duration: 2,
    ease: "bounce.out",
    y: -600,
    delay: .5

});

gsap.from(".navBar_show", {
    duration: 2.5,
    ease: "power3.out",
    y: -250,
    delay: 1.5
});

gsap.from(".content_show-slow", { duration: 3, opacity: 0, ease: "slow(0.5, 0.8, true)", delay: 2.5, });

gsap.from(".content_show-frmLeft", { duration: 2, x: -500, delay: 2, });