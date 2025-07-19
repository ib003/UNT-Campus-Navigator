document.addEventListener("DOMContentLoaded", function () {
  const themeSelect = document.getElementById("theme");
  const accessibilitySelect = document.getElementById("accessibility");

  // Load saved settings
  const savedTheme = localStorage.getItem("theme");
  const savedAccessibility = localStorage.getItem("accessibility");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeSelect.value = "dark";
  } else {
    document.body.classList.remove("dark-theme");
    themeSelect.value = "light";
  }

  if (savedAccessibility === "high-contrast") {
    document.body.classList.add("high-contrast");
    accessibilitySelect.value = "high-contrast";
  } else {
    document.body.classList.remove("high-contrast");
    accessibilitySelect.value = "normal";
  }

  // Theme change
  themeSelect.addEventListener("change", function () {
    if (this.value === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("theme", this.value);
  });

  // Accessibility mode change
  accessibilitySelect.addEventListener("change", function () {
    if (this.value === "high-contrast") {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
    localStorage.setItem("accessibility", this.value);
  });
});
