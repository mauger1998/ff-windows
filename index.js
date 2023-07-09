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

// // Wait for images
// setTimeout(() => {
//   const imgLoad = imagesLoaded(content)

//   imgLoad.on("done", instance => {
//     gsap.to(loader, {
//       opacity:0,
//       duration:1.5,
//       pointerEvents:"none",
//     })
//     gsap.to(".loader > svg", {
//       scale:0,
//       duration:1.5,
//     })
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
//   })
// }, 1000);

gsap.to(loader, {
        opacity:0,
        duration:1.5,
        pointerEvents:"none",
      })
      gsap.to(".loader > svg", {
        scale:0,
        duration:1.5,
      })
      gsap.from("h1", {
        yPercent:50,
        opacity:0,
        duration:1,
    } )
      gsap.to(".main-right p, .main-right button ", {
        y:0,
        opacity:1,
        duration:1,
        stagger:0.05,
    } )


// Clip Path
gsap.to(".two-column-right img", {
  scrollTrigger: {
    trigger: ".two-column-section",
    start: "top center", // when the top of the trigger hits the top of the viewport
    end:"+=100",
    scrub:-0.5,
  },
  clipPath:"polygon(100% 0, 0 0, 0 100%, 100% 100%)",
});






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
    

// Clip Path
gsap.to(".swiper-slide img", {
  scrollTrigger: {
    trigger: ".gallery-section",
    start: "top top", // when the top of the trigger hits the top of the viewport
    end:"+=150",
    scrub:-0.5,
  },
  clipPath:"polygon(100% 0, 0 0, 0 100%, 100% 100%)",
});

// Contact Section
gsap.to(".contact-section", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    end:"+=600",
    scrub:0.2,
  },
  y:0,
  opacity:1,
});

    
  





  gsap.to(".growing-image-section .wrapper img", {
    scrollTrigger: {
      trigger: ".growing-image-section .wrapper img",
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      scrub: 0.5,
      end:"+=650px"
  
    },
    borderRadius:"0px",
    width:"100%",
  
  });









// GSAP Media Queries





// add a media query. When it matches, the associated function will run


gsap.to(".growing-image-section .wrapper h3", {
  scrollTrigger: {
    trigger: ".growing-image-section",
    start: "top center", // when the top of the trigger hits the top of the viewport
    scrub: 0.2,
    end:"+=800px"

  },
  y:0,
  opacity:1,
  // stagger:0.1,

});




mm.add("(min-width: 1024px)", () => {
  // Pointer Events


gsap.to(".mySwiper", {
  scrollTrigger: {
    trigger: ".swiper-slide",
    start: "top -12%", // when the top of the trigger hits the top of the viewport
    scrub:0.1,
  },
  pointerEvents:"all",
  // stagger:0.1,

});
  
}) 




