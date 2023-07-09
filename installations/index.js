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
    })
    gsap.to(".loader > svg", {
      scale:0,
      duration:1.5,
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
}, 1000);


// Swiper w/ Breakpoints

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
    


// Pointer Events





mm.add("(min-width: 1024px)", () => {
  gsap.to(".mySwiper", {
    scrollTrigger: {
      trigger: ".swiper-slide",
      start: "top 40%", // when the top of the trigger hits the top of the viewport
      scrub:0.1,
    },
    pointerEvents:"all",
    // stagger:0.1,
  
  });
  
}) 

