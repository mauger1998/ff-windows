// Lottie

// Select Content to be Loaded
const content = document.querySelector("body")
// Select Loader
const loader = document.querySelector(".loader")
let animation = document.querySelector("#lottie")
LottieInteractivity.create({
    player:'#lottie',
    mode:"cursor",
    actions: [
        {
            type: "click",
            forceFlag: false,
  
        }
    ]
  });

// Get all images

// Wait for images
setTimeout(() => {
    const imgLoad = imagesLoaded(content)
    //Loading Animations
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
      gsap.to("h1", {
        duration:1,
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
        ease: 
    Power1.
    easeInOut,
    } )
    animation.play()


    })
  }, 1000);







  