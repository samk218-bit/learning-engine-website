const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) {
      menuToggle.textContent = "☰";
      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });
});

const filterButtons = [...document.querySelectorAll(".filter-button")];
const storyCards = [...document.querySelectorAll(".story-card")];
const searchInput = document.querySelector("#storySearch");
const emptyState = document.querySelector("#emptyState");
let activeFilter = "All";

function updateStories() {
  const query = (searchInput?.value || "").trim().toLowerCase();
  let visibleCount = 0;

  storyCards.forEach((card) => {
    const categoryMatches = activeFilter === "All" || card.dataset.category === activeFilter;
    const searchable = `${card.dataset.search || ""} ${card.textContent || ""}`.toLowerCase();
    const queryMatches = !query || searchable.includes(query);
    const visible = categoryMatches && queryMatches;
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  if (emptyState) emptyState.hidden = visibleCount !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter || "All";
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    updateStories();
  });
});

document.querySelectorAll("[data-category-link]").forEach((link) => {
  link.addEventListener("click", () => {
    activeFilter = link.dataset.categoryLink || "All";
    filterButtons.forEach((button) => button.classList.toggle("active", button.dataset.filter === activeFilter));
    updateStories();
  });
});

searchInput?.addEventListener("input", updateStories);
const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
