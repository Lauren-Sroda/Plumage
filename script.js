window.addEventListener("load", () => {
  const feather = document.getElementById("feather");
  const gear = document.getElementById("gear");
  const plumage = document.getElementById("plumageLogo");
  const headerText = document.querySelector("h1");
  const logoContainer = document.querySelector(".logo-container");

  // 1. Start: Feather drifts down in Z-pattern (3s)
  feather.style.opacity = "1";
  feather.style.animation = "featherDrift 3s ease-in-out forwards";

  // 2. Gear fades in during feather fall (at 1s, takes 1s)
  setTimeout(() => {
    gear.style.transition = "opacity 1s ease-in-out";
    gear.style.opacity = "1";
  }, 1000);

  // 3. Feather lands, then rotates to upright (at 3s, takes 0.6s)
  setTimeout(() => {
    feather.style.animation = "featherRotate 0.6s ease-out forwards";
  }, 3000);

  // 4. Switch to combined plumage logo (at 3.8s, takes 0.5s)
  setTimeout(() => {
    feather.classList.add("fade-out");
    gear.classList.add("fade-out");
    plumage.classList.add("fade-in");
  }, 3800);

  // 5. Logo slides left while text reveals (at 4.5s, takes 1.2s)
  setTimeout(() => {
    logoContainer.style.animation = "logoSlideLeft 1.2s ease-in-out forwards";
    headerText.style.animation = "textSlideOut 1.2s ease-out forwards";
  }, 4500);
});
