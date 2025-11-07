window.addEventListener("load", () => {
  const feather = document.getElementById("feather");
  const gear = document.getElementById("gear");
  const plumage = document.getElementById("plumageLogo");
  const headerText = document.querySelector("h1");

  // After feather drop animation (2s)
  setTimeout(() => {
    // Show gear
    gear.style.opacity = 1;
    gear.style.transition = "opacity 1s ease-in-out";

    // Blend feather + gear into plumage logo
    setTimeout(() => {
      feather.style.opacity = 0;
      gear.style.opacity = 0;
      plumage.style.opacity = 1;
      plumage.style.transition = "opacity 1s ease-in-out";

      // Slide in text after logo appears
      setTimeout(() => {
        headerText.style.opacity = 1;
        headerText.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";
        headerText.style.transform = "translateY(0)";
      }, 1000);

    }, 1000);
  }, 2000);
});

