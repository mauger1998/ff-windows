gsap.registerPlugin(ScrollTrigger);


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



// Scroll Trigger
// Loader


// Select Content to be Loaded
const content = document.querySelector("body")
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
}, 2000);











const imageArray = document.querySelectorAll(".welcome-right img")

const radiusImage = document.querySelector(".radius-image")

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
gsap.to(".gallery-bottom img", {
  scrollTrigger: {
    trigger: ".gallery-bottom img",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    end:"+=600px"
  },
  borderRadius:"0px",
  x:0,

});
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

const gridItemsParallaxOne = document.querySelectorAll(".grid-item:nth-child(1), .grid-item:nth-child(3)")
const gridItemsParallaxTwo = document.querySelectorAll(".grid-item:nth-child(4), .grid-item:nth-child(5), .grid-item:nth-child(7)")

const gridItemsParallaxOneP = document.querySelectorAll(".grid-item:nth-child(1) p, .grid-item:nth-child(3) p")
const gridItemsParallaxTwoP = document.querySelectorAll(".grid-item:nth-child(4) p, .grid-item:nth-child(5) p, .grid-item:nth-child(7) p")


gsap.to(gridItemsParallaxOne, {
  scrollTrigger: {
    trigger: gridItemsParallaxOne,
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    duration:1,
  },
  y:"0",
  stagger: 0.1,

});
gsap.to(gridItemsParallaxTwo, {
  scrollTrigger: {
    trigger: gridItemsParallaxTwo,
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    duration:1,
  },
  y:"0",
  stagger: 0.1,

});

gsap.to(gridItemsParallaxOneP, {
  scrollTrigger: {
    trigger: gridItemsParallaxOneP,
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
    duration:1,
  },
  y:"0",
  stagger: 0.2,

});
gsap.to(gridItemsParallaxTwoP, {
  scrollTrigger: {
    trigger: gridItemsParallaxTwoP,
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 1,
  },
  y:"0",
  stagger: 0.2,

});

gsap.to(".circle-wrapper", {
  scrollTrigger: {
    trigger: ".circle-wrapper",
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub: 0.5,
  },
  borderRadius:"0px",

});



