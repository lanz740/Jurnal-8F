function highlightToday() {
  const today = new Date().toISOString().split('T')[0];
  const entries = document.querySelectorAll(".entry");
  entries.forEach(entry => {
    entry.classList.remove("today");
    if (entry.dataset.date === today) {
      entry.classList.add("today");
    }
  });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

document.getElementById("searchDate").addEventListener("change", function () {
  const selected = this.value;
  const entries = document.querySelectorAll(".entry");
  entries.forEach(entry => {
    entry.style.display = entry.dataset.date === selected || selected === "" ? "block" : "none";
  });
});
