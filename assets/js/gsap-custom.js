// gsap.from(".dropBounce_content", {
//     duration: 2,
//     ease: "bounce.out",
//     y: -600,
//     delay: 2.5
// });


const bannerRight_animation = gsap.timeline({ defaults: { duration: 1 } })
bannerRight_animation
    .from(".banner_title", {
        duration: 2.5,
        ease: "bounce.out",
        y: -500,
        delay: 1.5,
    })
    .fromTo(".btn_contactMe", { duration: 3, x: -500, opacity: 0, }, { x: 0, opacity: 1, ease: "sine.in", });

const banner_show_slow = gsap.timeline({ defaults: { duration: 1 } })
banner_show_slow
    .from(".navBar_show", {
        duration: 1.5,
        ease: "power3.out",
        y: -250,

    })
    .fromTo(".banner_imgAndState_wrapper", {
        duration: 2.5,
        x: 500,
        opacity: 0,

    }, {
        x: 0,
        ease: "elastic.out(1,0.75)",
        opacity: 1,
    })
    .from(".banner_textContent", { opacity: 0, delay: .5, })
    .from(".bg_rect-banner", { opacity: 0 })
    .from(".bg_dots-banner", { opacity: 0 })