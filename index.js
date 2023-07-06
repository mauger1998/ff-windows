// Register GSAP
gsap.registerPlugin(ScrollTrigger);


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
  })
}, 1000);






// Swiper w/ Breakpoints
const swiper = new Swiper('.swiper', {
  // Mobile First
  slidesPerView: 2,
  spaceBetween: 8,
  touchMove:true,
  freeMode:true,
  mousewheel:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 800px
    800: {
      slidesPerView: 4,
      spaceBetween: 16,

    },    
  }
})      
    

    
  
// Scroll Animation
const imageArray = document.querySelectorAll(".welcome-right img")
const radiusImage = document.querySelector(".radius-image")
// Welcome Section
gsap.to(".welcome-right img", {
  scrollTrigger: {
    trigger: radiusImage,
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    stagger:true,
    end:"+=600px"
  },
  borderRadius:"0px",
  x:0,
});


gsap.to(".growing-image-section .wrapper img", {
  scrollTrigger: {
    trigger: ".growing-image-section .wrapper img",
    start: "top center", // when the top of the trigger hits the top of the viewport
    scrub: 0.5,
    end:"+=600px"

  },
  borderRadius:"0px",
  width:"100%",

});
// Center Grid Image

gsap.to(".grid-item:nth-child(2) img", {
  scrollTrigger: {
    trigger: ".grid-item:nth-child(2) img",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    end:"+=700px"
  },
  borderRadius:"0px",
  x:0,

});



// Center Grid Parralax

const gridItemsParallaxOne = document.querySelectorAll(".grid-item:nth-child(1), .grid-item:nth-child(3)")
const gridItemsParallaxTwo = document.querySelectorAll(".grid-item:nth-child(4), .grid-item:nth-child(5), .grid-item:nth-child(7)")

const gridItemsParallaxOneP = document.querySelectorAll(".grid-item:nth-child(1) p, .grid-item:nth-child(3) p")
const gridItemsParallaxTwoP = document.querySelectorAll(".grid-item:nth-child(4) p, .grid-item:nth-child(5) p, .grid-item:nth-child(7) p")



// GSAP Media Queries
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 967px)", () => {

  // this setup code only runs when viewport is at least 800px wide
  gsap.to(gridItemsParallaxOne, {
    scrollTrigger: {
      trigger: gridItemsParallaxOne,
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      scrub: 1,
      end:"+=500px"
    },
    y:"0",
    stagger: 0.1,
  
  });
  gsap.to(gridItemsParallaxTwo, {
    scrollTrigger: {
      trigger: gridItemsParallaxTwo,
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      scrub: 1,
      end:"+=500px"
    },
    y:"0",
    stagger: 0.1,
  
  });
  
  gsap.to(gridItemsParallaxOneP, {
    scrollTrigger: {
      trigger: gridItemsParallaxOneP,
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      scrub: 1,
      end:"+=500px"
    },
    y:"0",
    stagger: 0.2,
  
  });
  gsap.to(gridItemsParallaxTwoP, {
    scrollTrigger: {
      trigger: gridItemsParallaxTwoP,
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      scrub: 1,
      end:"+=500px"
    },
    y:"0",
    stagger: 0.2,
  
  });
  
  gsap.to(".circle-wrapper", {
    scrollTrigger: {
      trigger: ".circle-wrapper",
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      scrub: 0.5,
      end:"+=600px"

    },
    borderRadius:"0px",
  
  });

 

  // return () => { // optional
  //   // custom cleanup code here (runs when it STOPS matching)
    
  // };
});

// // later, if we need to revert all the animations/ScrollTriggers...
// mm.revert();

// add a media query. When it matches, the associated function will run
mm.add("(max-width: 966px)", () => {

  // this setup code only runs when viewport is at least 800px wide
  gsap.to(gridItemsParallaxOne, {
    scrollTrigger: {
      trigger: gridItemsParallaxOne,
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      scrub: 0.5,
      end:"+=300",

    },
    y:"0",
    stagger: 0.1,
  
  });
  gsap.to(gridItemsParallaxTwo, {
    scrollTrigger: {
      trigger: gridItemsParallaxTwo,
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      scrub: 0.5,
      end:"+=300",

    },
    y:"0",
    stagger: 0.1,
  
  });
  
  gsap.to(gridItemsParallaxOneP, {
    scrollTrigger: {
      trigger: gridItemsParallaxOneP,
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      scrub: 0.5,
      end:"+=300",

    },
    y:"0",
    stagger: 0.1,
  
  });
  gsap.to(gridItemsParallaxTwoP, {
    scrollTrigger: {
      trigger: gridItemsParallaxTwoP,
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      scrub: 0.5,
      end:"+=300",

    },
    y:"0",
    stagger: 0.1,
  
  });
  
  gsap.to(".circle-wrapper", {
    scrollTrigger: {
      trigger: ".circle-wrapper",
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      scrub: 0.5,
      end:"+=800",
    },
    borderRadius:"0px",
  
  });

  // return () => { // optional
  //   // custom cleanup code here (runs when it STOPS matching)
    
  // };
});

// // later, if we need to revert all the animations/ScrollTriggers...
// mm.revert();


// Growing Image 

