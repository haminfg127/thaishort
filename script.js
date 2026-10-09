document.getElementById("year").textContent = new Date().getFullYear();

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent.toLowerCase().includes("join") || button.textContent.toLowerCase().includes("add to cart")) {
      button.textContent = button.textContent.toLowerCase().includes("join") ? "Joined" : "Added";
      button.disabled = true;
      button.style.opacity = "0.8";
    }
  });
});

