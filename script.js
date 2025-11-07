window.addEventListener("load", () => {
  const feather = document.getElementById("feather");
  const gear = document.getElementById("gear");
  const plumage = document.getElementById("plumageLogo");
  const headerText = document.querySelector("h1");
  const logoContainer = document.querySelector(".logo-container");

  // Start feather drift
  feather.style.animation = "featherDrift 3.5s ease-in-out forwards";

  // Fade in gear during feather fall
  setTimeout(() => {
    gear.style.transition = "opacity 1.5s ease-in-out";
    gear.style.opacity = 1;
  }, 1500);

  // After feather lands, fade in Plumage logo
  setTimeout(() => {
    feather.style.opacity = 0;
    gear.style.opacity = 0;
    plumage.style.transition = "opacity 1s ease-in-out";
    plumage.style.opacity = 1;
  }, 3800);

  // Slide logo left to reveal text
  setTimeout(() => {
    logoContainer.style.animation = "logoSlideLeft 1.5s ease-in-out forwards";
  }, 4800);

  // Reveal text from behind
  setTimeout(() => {
    headerText.style.animation = "textSlideOut 1.5s ease-out forwards";
  }, 5300);
});
