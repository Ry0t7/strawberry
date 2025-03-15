const tl = gsap.timeline();
const text = new SplitType(".hero-head");
const breakPoint = 768;

document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('navArea');
    const btn = document.querySelector('.toggle-btn');
    const mask = document.getElementById('mask');
    const open = 'open';

    
    btn.addEventListener('click', function () {
        if (!nav.classList.contains(open)) {
            nav.classList.add(open);
        } else {
            nav.classList.remove(open);
        }
    });

    mask.addEventListener('click', function () {
        nav.classList.remove(open);
    });
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    spaceBetween: 40,
    slidesPerView: "auto",
    breakpoints: {
		768: {
            slidesPerView: 3
		}
	},
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

tl.fromTo("#loading", {
    autoAlpha: 1,
},
{
    autoAlpha: 0,
    delay: 1,
    ease: "power1.out"
})
tl.fromTo(".char", {
    autoAlpha: 0,
    y: 20,
},
{
    y: 0,
    autoAlpha: 1,
    delay: 1,
    stagger: 0.05,
    duration: 1.2,
    ease: "elastic.out",
})

//scrollTrigger
gsap.fromTo(".normal-head", {
    autoAlpha: 0,
    y: 30,
},
{
    autoAlpha: 1,
    y: 0,
    duration: .3,
    stagger: 0.05,
    scrollTrigger: {
        trigger: ".normal",
        start: "top center",
    },
    ease: Power4.out,
});
gsap.fromTo(".j1", {
    autoAlpha: 0,
    x: -30,
},
{
    autoAlpha: 1,
    x: 0,
    duration: .5,
    stagger: 0.05,
    scrollTrigger: {
        trigger: ".normal-head",
        start: "top center",
    },
    ease: Power4.out,
});
gsap.fromTo(".j2", {
    autoAlpha: 0,
    y: 30,
},
{
    autoAlpha: 1,
    y: 0,
    duration: .5,
    stagger: 0.05,
    scrollTrigger: {
        trigger: ".normal-head",
        start: "top center",
    },
    ease: Power4.out,
});
gsap.fromTo(".j3", {
    autoAlpha: 0,
    x: 30,
},
{
    autoAlpha: 1,
    x: 0,
    duration: .5,
    stagger: 0.05,
    scrollTrigger: {
        trigger: ".normal-head",
        start: "top center",
    },
    ease: Power4.out,
});

gsap.fromTo(".arrange-container", {
    autoAlpha: 0,
    y: 30,
},
{
    autoAlpha: 1,
    y: 0,
    duration: .5,
    stagger: 0.05,
    scrollTrigger: {
        trigger: ".arrange",
        start: "top center",
    },
    ease: Power4.out,
});