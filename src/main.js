// Get the card element and rotate button
const card = document.querySelector(".card-container");
const rotateButton = document.querySelector(".rotate-btn");

// Add event listener to the button to trigger rotation
rotateButton.addEventListener("click", () => {
  card.classList.toggle("rotate");
});
