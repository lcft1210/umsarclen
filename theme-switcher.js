document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");
  const themeMenu = document.getElementById("themeMenu");
  const themeButtons = document.querySelectorAll("[data-theme]");

  const THEME_KEY = "ums_theme";
  const THEMES = ["blue-purple","green-teal","orange-red","pink-violet"];

  // Load saved theme
  const savedTheme = localStorage.getItem(THEME_KEY) || "blue-purple";
  applyTheme(savedTheme);

  // Toggle menu visibility
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();          // prevent document click closing
    themeMenu.classList.toggle("hidden");
  });

  // Theme button click
  themeButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const theme = button.dataset.theme;
      applyTheme(theme);
      themeMenu.classList.add("hidden");
    });
  });

  function applyTheme(theme) {
    document.body.classList.remove(...THEMES);
    document.body.classList.add(theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  // Close menu on outside click
  document.addEventListener("click", (e) => {
    if (!themeMenu.contains(e.target) && e.target !== toggleBtn) {
      themeMenu.classList.add("hidden");
    }
  });
});
