window.addEventListener("load", () => {
  const feather = document.getElementById("feather");
  const gear = document.getElementById("gear");
  const plumage = document.getElementById("plumageLogo");
  const headerText = document.querySelector("h1");
  const logoContainer = document.querySelector(".logo-container");
  const header = document.getElementById("mainHeader");

  // 1. Start: Feather drifts down smoothly (4s for smoother motion)
  feather.style.opacity = "1";
  feather.style.animation = "featherDrift 4s ease-in-out forwards";

  // 2. Gear fades in during feather fall (at 1.5s, takes 1s)
  setTimeout(() => {
    gear.style.transition = "opacity 1s ease-in-out";
    gear.style.opacity = "1";
  }, 1500);

  // 3. Feather lands perfectly centered (at 4s)
  // Wait a moment, then switch to combined logo (at 4.5s, takes 0.6s)
  setTimeout(() => {
    feather.classList.add("fade-out");
    gear.classList.add("fade-out");
    plumage.classList.add("fade-in");
  }, 4500);

  // 4. Logo shifts left while text reveals letter by letter (at 5.3s, takes 1.5s)
  setTimeout(() => {
    logoContainer.style.animation = "logoShiftLeft 1.5s ease-in-out forwards";
    headerText.style.opacity = "1";
    headerText.style.animation = "textReveal 1.5s ease-out forwards";
  }, 5300);

  // 5. Header shrinks to sticky bar (at 7s, takes 0.8s)
  setTimeout(() => {
    header.classList.add("shrink");
  }, 7000);
});
