// Register GSAP
gsap.registerPlugin(ScrollTrigger)

// Declare GSAP Media
let mm = gsap.matchMedia()

// Dropdown
document.addEventListener('click', (e) => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]')

    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

// Loader

// Select Content to be Loaded
const content = document.querySelector('body')
// Select Loader
const loader = document.querySelector('.loader')

// Get all images
const imgLoad = imagesLoaded(content)

// Wait for images
setTimeout(() => {
    const imgLoad = imagesLoaded(content)
    //Loading Animations
    imgLoad.on('done', (instance) => {
        gsap.to(loader, {
            opacity: 0,
            duration: 1.5,
            pointerEvents: 'none',
        })
        gsap.to('.loader > svg', {
            scale: 0,
            duration: 1.5,
        })
        gsap.to('h1', {
            duration: 1,
            clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
            ease: Power1.easeInOut,
        })
        //     gsap.from("h1", {
        //       yPercent:50,
        //       opacity:0,
        //       duration:1,
        //   } )
        //     gsap.to(".main-right p, .main-right button ", {
        //       y:0,
        //       opacity:1,
        //       duration:1,
        //       stagger:0.05,
        //   } )
    })
}, 500)

// Swiper w/ Breakpoints

// Swiper w/ Breakpoints
const swiper = new Swiper('.swiper', {
    // Mobile First
    slidesPerView: 1.5,
    spaceBetween: 8,
    touchMove: true,
    freeMode: true,
    createElements: true,
    navigation: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 800px
        600: {
            slidesPerView: 2.2,
            spaceBetween: 16,
        },
        800: {
            slidesPerView: 3.2,
            spaceBetween: 16,
        },
    },
})

// Clip Path
gsap.to('.swiper-slide img', {
    scrollTrigger: {
        trigger: '.all-services-gallery-section',
        start: 'top 30%', // when the top of the trigger hits the top of the viewport
        end: '+=0',
        scrub: -0.5,
    },
    ease: Power4.easeIn,
    clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
})

// Two Column

// Clip Path
gsap.to('.two-column-right img', {
    scrollTrigger: {
        trigger: '.two-column-section',
        start: 'top center', // when the top of the trigger hits the top of the viewport
        end: '+=100',
        scrub: -0.5,
    },
    ease: 'Power4.easeIn',
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
})

// Pointer Events

mm.add('(min-width: 1024px)', () => {
    gsap.to('.mySwiper', {
        scrollTrigger: {
            trigger: '.swiper-slide',
            start: 'top 40%', // when the top of the trigger hits the top of the viewport
            scrub: 0.1,
        },
        pointerEvents: 'all',
        // stagger:0.1,
    })
})

// Background Fixed

mm.add('(min-width: 701px)', () => {
    gsap.to('.cta-section h2, .cta-section button', {
        scrollTrigger: {
            trigger: '.cta-section h2',
            start: 'top bottom', // when the top of the trigger hits the top of the viewport
            end: '+=500',
            scrub: 0.5,
        },
        y: 0,
        opacity: 1,
        ease: 'Power1.easeInOut',
        // backgroundAttatchment:"fixed",
        stagger: 0.5,
    })
})

mm.add('(max-width: 700px)', () => {
    gsap.to('.cta-section h2, .cta-section button', {
        scrollTrigger: {
            trigger: '.cta-section h2',
            start: 'top bottom', // when the top of the trigger hits the top of the viewport
            end: '+=200',
            scrub: 0.5,
        },
        y: 0,
        opacity: 1,
        ease: 'Power1.easeInOut',
        // backgroundAttatchment:"fixed",
        stagger: 0.2,
    })
})

// $('button').tilt({
//   scale: 1.2,
//   perspective: 500
// })

// $('button').tilt({
//     glare: true,
//     maxGlare: 0.5
// })
