// Register GSAP
gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();



// Dropdown
document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")

  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  let currentDropdown
  if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
  })
})



// Loader

// Select Content to be Loaded
const content = document.querySelector("body")
// Select Loader
const loader = document.querySelector(".loader")

// Get all images
const imgLoad = imagesLoaded(content)

// Wait for images
setTimeout(() => {
  const imgLoad = imagesLoaded(content)

  imgLoad.on("done", instance => {
    gsap.to(loader, {
      opacity:0,
      duration:1.5,
      pointerEvents:"none",
      ease: "Power4.easeInOut",
    })
    gsap.to(".loader > svg", {
      scale:0,
      duration:1.5,
      ease: "Power4.easeInOut",
    })
    gsap.to("h1", {
      duration:1,
      clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
      ease: "Power4.easeInOut",
  } )
    gsap.to(".main-left p.tagline", {
      duration:1,
      clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
      ease: "Power4.easeInOut",
      delay:0.2,
  } )
    gsap.to(".main-right p", {
      y:0,
      delay:0.5,
      opacity:1,
      duration:1,
      stagger:0.05,
      clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
      ease: "Power4.easeInOut",
  } )
  ScrollTrigger.refresh()

  })
}, 1000);

// Loader End

// Two Column Right First Section Clip Path

// Clip Path
gsap.to(".two-column-right img", {
  scrollTrigger: {
    trigger: ".two-column-section",
    start: "top center", // when the top of the trigger hits the top of the viewport
    end:"+=100",
    scrub:-0.5,
  },
  ease: "Power4.easeInOut",
  clipPath:"polygon(100% 0, 0 0, 0 100%, 100% 100%)",
});



// Two Column Right First Section Clip Path EWnd



// Swiper w/ Breakpoints
const swiper = new Swiper('.swiper', {
  // Mobile First
  slidesPerView: 2.4,
  spaceBetween: 8,
  touchMove:true,
  freeMode:true,
  mousewheel:true,
  createElements:true,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 800px
    800: {
      slidesPerView: 3.2,
      spaceBetween: 16,

    },    
  }
})   

// Swiper Breakpoints End
    

// Clip Path Swiper Slides
gsap.to(".swiper-slide img", {
  scrollTrigger: {
    trigger: ".gallery-section",
    start: "top top", // when the top of the trigger hits the top of the viewport
    end:"+=10",
    scrub:-0.5,
  },
  ease: "Power4.easeInOut",
  clipPath:"polygon(100% 0, 0 0, 0 100%, 100% 100%)",
});

//Contact Section Media Queires

mm.add("(max-width: 500px)", () => {
  gsap.to(".contact-section .wrapper", {
    scrollTrigger: {
      trigger: ".contact-section .wrapper",
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end:"+=300",
      scrub:0.2,
    },
    y:0,
    opacity:1,
    ease: "Power1.easeInOut",
  });
})
mm.add("(min-width: 501px)", () => {
  gsap.to(".contact-section .wrapper", {
    scrollTrigger: {
      trigger: ".contact-section .wrapper",
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end:"+=600",
      scrub:0.2,
    },
    y:0,
    opacity:1,
    ease: "Power1.easeInOut",
  });
})

    
  


// Growing Image 

gsap.to(".growing-image-section .wrapper h3", {
  scrollTrigger: {
    trigger: ".growing-image-section",
    start: "top center", // when the top of the trigger hits the top of the viewport
    scrub: 0.2,
    end:"+=800px",

  },
  y:0,
  opacity:1,
  ease: 
Power4.
easeInOut,
  // stagger:0.1,

});
gsap.to(".growing-image-section .wrapper img", {
  scrollTrigger: {
    trigger: ".growing-image-section .wrapper img",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 0.5,
    end:"+=650px",
    onLeave: () => ScrollTrigger.refresh()
  },
  borderRadius:"0px",
  width:"100%",
  ease: "Power4.easeInOut",
})

// Growing Image End


// Pointer Events for Sliders

mm.add("(min-width: 1024px)", () => {
  // Pointer Events


gsap.to(".mySwiper", {
  scrollTrigger: {
    trigger: ".first-slide",
    start: "top 20%", // when the top of the trigger hits the top of the viewport
    scrub:0.1,
    toggleClass: {targets: ".mySwiper", className: "pointer"}
  
  },
  
});
  
}) 
// Pointer Events for Sliders End



// window.addEventListener("resize", (e)  => [
//   ScrollTrigger.refresh()
// ])






