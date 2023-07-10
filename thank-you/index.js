// Lottie



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


window.addEventListener("load", (e) => {
    animation.play()
})

  