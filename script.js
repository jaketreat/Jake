// Find all elements that should contain animations
const animations = document.querySelectorAll(".lottie");

animations.forEach((el) => {

  // Read attributes from the HTML
  const animationName = el.dataset.animation;
  const loop = el.dataset.loop === "true";
  const autoplay = el.dataset.autoplay === "true";

  // Load the animation
  lottie.loadAnimation({
    container: el,
    renderer: "svg",
    loop: loop,
    autoplay: autoplay,
    path: "./animations/" + animationName
  });

});