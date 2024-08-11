gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);


// <-- banner Animation Start here -->

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

// <-- banner Animation end here -->



// <-- quotes Animation start here -->

// Define the path using a cubic Bezier curve with zIndex changes
const pathPoints = [
    { x: 100, y: -20, zIndex: 10 },
    { x: 280, y: 10, zIndex: 10 },
    { x: 500, y: 100, zIndex: 10 },
    { x: 750, y: -160, zIndex: 10 },
    { x: 280, y: -50, zIndex: 10 },
    { x: 600, y: 100, zIndex: 10 },
    { x: 800, y: 0, zIndex: 0 },
    { x: window.innerWidth, y: -250, zIndex: 0 }
];


// Create a timeline for the animation
const tween = gsap.timeline({
    defaults: { ease: "power1.inOut", duration: 16 } // Setting defaults
});

// Create the motionPath
tween.to(".paper_plane", {
    motionPath: {
        path: pathPoints.map(point => ({ x: point.x, y: point.y })),
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    }
});

// Add zIndex changes at the right time in the animation
pathPoints.forEach((point, index) => {
    tween.set(".paper_plane", { zIndex: point.zIndex }, index * (10 / (pathPoints.length - 1)));
});



// Define your second tween (tween2) with different animations
const tween2 = gsap.timeline({
    defaults: { ease: "power2.inOut", duration: 3 }
});

tween2.fromTo(".quoteOnScrollShow", { opacity: 0 }, { opacity: 1 });



// Define your space_item
const space_item_01 = gsap.timeline({
    defaults: { ease: "linear", duration: 8 }
});

space_item_01.fromTo(".space_item-01", { x: -200 }, { x: 0 })
    .to(".space_item-01", {
        rotation: 360,
    })



// Define your space_item
const space_item_02 = gsap.timeline({
    defaults: { ease: "linear", duration: 4 }
});

space_item_02.fromTo(".space_item-02", { y: -200 }, { y: 0 })
    .to(".space_item-02", {
        rotation: 30,
    })
    .to(".space_item-02", {
        rotation: 0,
    })
    .to(".space_item-02", {
        rotation: 30,
    })
    .to(".space_item-02", {
        rotation: 0,
    })



// Define your space_item
const space_item_03 = gsap.timeline({
    defaults: { ease: "linear", duration: 6 }
});

space_item_03.fromTo(".space_item-03", { x: 200, y: -200 }, { x: 0, y: 0 })
    .to(".space_item-03", {
        x: -20,
        y: 20,
        duration: 2,
        ease: "power1.inOut"
    })
    .to(".space_item-03", {
        x: 0,
        y: 0,
        duration: 2,
        ease: "power1.inOut"
    })
    .to(".space_item-03", {
        x: -20,
        y: 20,
        duration: 2,
        ease: "power1.inOut"
    })
    .to(".space_item-03", {
        x: 0,
        y: 0,
        duration: 2,
        ease: "power1.inOut"
    })
    .to(".space_item-03", {
        x: -20,
        y: 20,
        duration: 2,
        ease: "power1.inOut"
    })
    .to(".space_item-03", {
        x: 0,
        y: 0,
        duration: 2,
        ease: "power1.inOut"
    })



// Define your space_item
const space_item_04 = gsap.timeline({
    defaults: { ease: "linear", duration: 8 }
});

space_item_04.fromTo(".space_item-04", { x: -200, y: 200 }, { x: 0, y: 0 })
    .to(".space_item-04", {
        rotation: -180,
    })


// Define your space_item
const space_item_05 = gsap.timeline({
    defaults: { ease: "linear", duration: 8 }
});

space_item_05.fromTo(".space_item-05", { x: -200, y: 200 }, { x: 0, y: 0 })
    .to(".space_item-05", {
        rotation: 360,
    })




const rocketPathPoints = [
    { x: -200, y: 0 },
    { x: -650, y: 200 },
    { x: -850, y: 100 },
    { x: -800, y: -100 },
    { x: -500, y: 100 },
    { x: -800, y: 200 },
    { x: -900, y: 200 },
    { x: -1000, y: -100 },
    { x: -1100, y: -150 },
    { x: -1300, y: -130 },
    { x: -1200, y: 100 },
    { x: -1020, y: 50 },
    { x: -1000, y: -100 },
    { x: -1200, y: -150 },
    { x: -1900, y: 550 },
];


// Create a timeline for the animation
const space_item_06 = gsap.timeline({
    defaults: { ease: "power1.inOut", duration: 18 } // Setting defaults
});

// Create the motionPath
space_item_06.to(".space_item-06", {
    motionPath: {
        path: rocketPathPoints.map(point => ({ x: point.x, y: point.y })),
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    }
});

// Add zIndex changes at the right time in the animation
rocketPathPoints.forEach((point, index) => {
    space_item_06.set(".space_item-06", { zIndex: point.zIndex }, index * (10 / (rocketPathPoints.length - 1)));
});




// Create a master timeline to hold both tweens
const masterTimeline = gsap.timeline();
masterTimeline.add(tween2); // Start tween2 at the same time as tween
masterTimeline.add(tween, 1);
masterTimeline.add(space_item_01, 2);
masterTimeline.add(space_item_02, 3);
masterTimeline.add(space_item_03, 5);
masterTimeline.add(space_item_04, 5);
masterTimeline.add(space_item_05, 1);
masterTimeline.add(space_item_06, 5);

// Set up the ScrollTrigger to control the animation on scroll
ScrollTrigger.create({
    animation: masterTimeline,
    trigger: ".quote",
    start: "top top",
    end: "+=1000",
    scrub: 4, // Set scrub to 2 for smoother scrolling
    pin: true,
    //markers: true // Show markers for debugging (optional)
});

// <-- quotes Animation end here -->