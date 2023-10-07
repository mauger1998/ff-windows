// Register GSAP
gsap.registerPlugin(ScrollTrigger)
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
const content = document.querySelector('main')
// Select Loader
const loader = document.querySelector('.loader')

// Get all images
const imgLoad = imagesLoaded(content)

// Wait for images
setTimeout(() => {
    const imgLoad = imagesLoaded(content, { background: true })

    imgLoad.on('done', (instance) => {
        gsap.to(loader, {
            opacity: 0,
            duration: 1.5,
            pointerEvents: 'none',
            ease: 'Power4.easeInOut',
        })
        gsap.to('.loader > svg', {
            scale: 0,
            duration: 1.5,
            ease: 'Power4.easeInOut',
        })
        gsap.to('h1', {
            duration: 1,
            clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
            ease: 'Power4.easeInOut',
        })
        gsap.to('.main-left p.tagline', {
            duration: 1,
            clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
            ease: 'Power4.easeInOut',
            delay: 0.2,
        })
        gsap.to('.main-right p', {
            y: 0,
            delay: 0.5,
            opacity: 1,
            duration: 1,
            stagger: 0.05,
            clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
            ease: 'Power4.easeInOut',
        })
        ScrollTrigger.refresh()
    })
}, 500)

// Loader End

// Two Column Right First Section Clip Path

// Clip Path
gsap.to('.two-column-right img', {
    scrollTrigger: {
        trigger: '.two-column-section',
        start: 'top center', // when the top of the trigger hits the top of the viewport
        end: '+=100',
        scrub: -0.5,
    },
    ease: 'Power4.easeInOut',
    clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
})

// Two Column Right First Section Clip Path EWnd

// Swiper w/ Breakpoints
const swiper = new Swiper('.swiper', {
    // Mobile First
    slidesPerView: 2.4,
    spaceBetween: 8,
    touchMove: true,
    freeMode: true,
    mousewheel: true,
    createElements: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 800px
        800: {
            slidesPerView: 3.2,
            spaceBetween: 16,
        },
    },
})

// Swiper Breakpoints End

// Clip Path Swiper Slides
gsap.to('.swiper-slide img', {
    scrollTrigger: {
        trigger: '.gallery-section',
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: '+=10',
        scrub: -0.5,
    },
    ease: 'Power4.easeInOut',
    clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
})

//Contact Section Media Queires

mm.add('(max-width: 500px)', () => {
    gsap.to('.contact-section .wrapper', {
        scrollTrigger: {
            trigger: '.contact-section .wrapper',
            start: 'top bottom', // when the top of the trigger hits the top of the viewport
            end: '+=300',
            scrub: 0.2,
        },
        y: 0,
        opacity: 1,
        ease: 'Power1.easeInOut',
    })
})
mm.add('(min-width: 501px)', () => {
    gsap.to('.contact-section .wrapper', {
        scrollTrigger: {
            trigger: '.contact-section .wrapper',
            start: 'top bottom', // when the top of the trigger hits the top of the viewport
            end: '+=600',
            scrub: 0.2,
        },
        y: 0,
        opacity: 1,
        ease: 'Power1.easeInOut',
    })
})

// Growing Image

gsap.to('.growing-image-section .wrapper h3', {
    scrollTrigger: {
        trigger: '.growing-image-section',
        start: 'top center', // when the top of the trigger hits the top of the viewport
        scrub: 0.2,
        end: '+=800px',
    },
    y: 0,
    opacity: 1,
    ease: Power4.easeInOut,
    // stagger:0.1,
})
gsap.to('.growing-image-section .wrapper img', {
    scrollTrigger: {
        trigger: '.growing-image-section .wrapper img',
        start: 'top bottom', // when the top of the trigger hits the top of the viewport
        scrub: 0.5,
        end: '+=650px',
        onLeave: () => ScrollTrigger.refresh(),
    },
    borderRadius: '0px',
    width: '100%',
    ease: 'Power4.easeInOut',
})

// Growing Image End

// Pointer Events for Sliders

mm.add('(min-width: 1024px)', () => {
    // Pointer Events

    gsap.to('.mySwiper', {
        scrollTrigger: {
            trigger: '.first-slide',
            start: 'top 20%', // when the top of the trigger hits the top of the viewport
            scrub: 0.1,
            toggleClass: { targets: '.mySwiper', className: 'pointer' },
        },
    })
})
// Pointer Events for Sliders End

// Modal
const modalOpen = document.querySelector('#open-modal')
const modalClose = document.querySelector('#close-modal')
const modal = document.querySelector('dialog')

// Complaints Content
const complaintsContent = document.querySelector('.complaints-content')

// To the form button
const takeMeToTheFormButton = document.querySelector(
    '.complaints-column button'
)
// Complaints column, content wrapper
const complaintsColumn = document.querySelector('.complaints-column')
const html = document.querySelector('html')

// Complaints form
const complaintsForm = document.createElement('div')
complaintsForm.classList.add('complaints-form')
complaintsForm.innerHTML = /*html*/ ` 
                          <form id="special=form" action="https://formsubmit.co/info@ffwindows.co.uk" method="POST">

                            <div class="tab-container">
                              <div class="tab">
                                <fieldset>
                                    <input
                                        placeholder="first name"
                                        type="text"
                                        name="firstName"
                                        id="firstName" />
                                    <label for="firstName"> First Name </label>
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="last name"
                                        type="text"
                                        name="lastName"
                                        id="lastName" />
                                    <label for="lastName"> Last Name </label>
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="address"
                                        type="text"
                                        name="address"
                                        id="address" />
                                    <label for="address">
                                        Address (1st Line)
                                    </label>
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="email"
                                        type="email"
                                        name="email"
                                        id="email" />
                                    <label for="email"> Email </label>
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="phone"
                                        inputmode="numeric"
                                        type="text"
                                        name="phone"
                                        id="phone" />
                                    <label for="phone"> Phone </label>
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="post code"
                                        type="text"
                                        name="postCode"
                                        id="postCode" />
                                    <label for="postCode"> Postal Code </label>
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="fax"
                                        inputmode="numeric"
                                        type="text"
                                        name="fax"
                                        id="fax" />
                                    <label for="fax"> Fax </label>
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="ref"
                                        type="text"
                                        name="customerRef"
                                        id="customerRef" />
                                    <label for="customerRef">
                                        Customer Reference No.
                                    </label>
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="parish"
                                        type="text"
                                        name="parish"
                                        id="parish" />
                                    <label for="parish"> Parish </label>
                                </fieldset>
                              </div>
                              <div class="tab tab-two">
                              <fieldset>
                                    <input
                                        placeholder="first name"
                                        type="text"
                                        name="firstName"
                                        id="firstName" />
                                    <label for="firstName"> Middle Name </label>
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="last name"
                                        type="text"
                                        name="lastName"
                                        id="lastName" />
                                    <label for="lastName"> Last Name </label>
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="address"
                                        type="text"
                                        name="address"
                                        id="address" />
                                    <label for="address">
                                        Address (1st Line)
                                    </label>
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="email"
                                        type="email"
                                        name="email"
                                        id="email" />
                                    <label for="email"> Email </label>
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="phone"
                                        inputmode="numeric"
                                        type="text"
                                        name="phone"
                                        id="phone" />
                                    <label for="phone"> Phone </label>
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="post code"
                                        type="text"
                                        name="postCode"
                                        id="postCode" />
                                    <label for="postCode"> Postal Code </label>
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="fax"
                                        inputmode="numeric"
                                        type="text"
                                        name="fax"
                                        id="fax" />
                                    <label for="fax"> Fax </label>
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="ref"
                                        type="text"
                                        name="customerRef"
                                        id="customerRef" />
                                    <label for="customerRef">
                                        Customer Reference No.
                                    </label>
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="parish"
                                        type="text"
                                        name="parish"
                                        id="parish" />
                                    <label for="parish"> Parish </label>
                                </fieldset>
                              </div>
                            </div>
                        </form>                            
                        <button class="next submit-hidden">Next</button>
                        <button class="back submit-hidden">Back</button>
                        <button type="submit"  form="special-form" class="submit  submit-hidden">Submit</button>
`

// Render Form

function renderForm() {
    complaintsColumn.removeChild(complaintsContent)
    // complaintsContent.style.display = 'none'
    complaintsColumn.appendChild(complaintsForm)
}
function checkFormIsComplete() {
    const allInputsSecond = document.querySelectorAll('.tab-two input')

    if (
        allInputsSecond[0].value.length > 0 &&
        allInputsSecond[1].value.length > 0 &&
        allInputsSecond[2].value.length > 0 &&
        allInputsSecond[3].value.length > 0 &&
        allInputsSecond[4].value.length > 0 &&
        allInputsSecond[5].value.length > 0 &&
        allInputsSecond[6].value.length > 0 &&
        allInputsSecond[7].value.length > 0 &&
        allInputsSecond[8].value.length > 0
    ) {
        return true
    } else {
        return false
    }
}

// Go to next form page
function nextFormPage(nextButtonFirst) {
    const tabSlider = document.querySelector('.tab-container')

    tabSlider.classList.add('form-next-page')

    const submitButton = document.querySelector('.submit')

    nextButtonFirst.classList.add('submit-hidden')

    const backButton = document.querySelector('.back')
    backButton.classList.remove('submit-hidden')

    // complaintsForm.addEventListener('change', (e) => {
    //     if (checkFormIsComplete) {
    //         submitButton.classList.remove('submit-hidden')
    //     }
    // })

    backButton.addEventListener('click', (e) => [
        tabSlider.classList.remove('form-next-page'),
        backButton.classList.add('submit-hidden'),
        nextButtonFirst.classList.remove('submit-hidden'),
        submitButton.classList.add('submit-hidden'),
    ])
}

// Show modal
modalOpen.addEventListener('click', () => {
    modal.show()
    html.style.overflowY = 'hidden'
})

// Close Modal
modalClose.addEventListener('click', () => {
    modal.close()
    console.log('hello')
    html.style.overflowY = 'visible'
})

// Take me to the form when clicked then take me to next page

takeMeToTheFormButton.addEventListener('click', () => {
    renderForm()
    const nextButtonFirstForm = complaintsColumn.querySelector('.next')

    nextButtonFirstForm.addEventListener('click', () => {
        nextFormPage(nextButtonFirstForm)
    })
})

// Button diabled testing

complaintsForm.addEventListener('change', (e) => {
    const allInputs = document.querySelectorAll('.tab:nth-child(1) input')
    if (
        allInputs[0].value.length > 0 &&
        allInputs[1].value.length > 0 &&
        allInputs[2].value.length > 0 &&
        allInputs[3].value.length > 0 &&
        allInputs[4].value.length > 0 &&
        allInputs[5].value.length > 0 &&
        allInputs[6].value.length > 0 &&
        allInputs[7].value.length > 0 &&
        allInputs[8].value.length > 0
    ) {
        const nextButtonFirstForm = complaintsColumn.querySelector('.next')
        nextButtonFirstForm.classList.remove('submit-hidden')
    } else {
        const nextButtonFirstForm = complaintsColumn.querySelector('.next')

        nextButtonFirstForm.classList.add('submit-hidden')
    }
})
