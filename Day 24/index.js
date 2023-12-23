document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the class "lights"
  const lights = document.querySelectorAll(".lights");

  // Variable to track if it's the red lights' turn
  let isRedTurn = true;

  // Set up an interval for the lights animation
  setInterval(() => {
    // Iterate over each light element
    lights.forEach((light, index) => {
      // Check if it's the current light's turn based on the index and isRedTurn
      if ((index % 2 === 0 && isRedTurn) || (index % 2 !== 0 && !isRedTurn)) {
        // Turn the light on by adding the "lights-on" class
        light.classList.add("lights-on");

        // Toggle the red and blue classes for the current light
        light.classList.toggle("red", index % 2 === 0);
        light.classList.toggle("blue", index % 2 !== 0);

        // Schedule turning the light off after 400ms
        setTimeout(() => {
          light.classList.remove("lights-on");
        }, 400);
      }
    });

    // Toggle the turn for the next interval
    isRedTurn = !isRedTurn;
  }, 800);
});