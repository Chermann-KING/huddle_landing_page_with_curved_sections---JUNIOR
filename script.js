const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

// Regex pour vérifier si l'adresse email est valide
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener("input", function () {
  if (emailRegex.test(emailInput.value)) {
    // email valide
    emailInput.style.borderColor = "initial";
    emailError.textContent = "";
  } else {
    // email invalide
    emailError.textContent = "Check your email please";
  }
});

// Bordur au moment du focus
emailInput.addEventListener("focus", () => {
  emailInput.style.border = "2px solid hsl(0, 100%, 63%)";
});
