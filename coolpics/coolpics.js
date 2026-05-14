const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");
const gallery = document.querySelector(".gallery");

function toggleMenu() {
  nav.classList.toggle("show");
}

function handleResize() {
  if (window.innerWidth >= 1000) {
    nav.classList.remove("show");
  } else {
    nav.classList.remove("show");
  }
}

function openViewer(event) {
  const clickedImage = event.target.closest("img");

  if (!clickedImage) {
    return;
  }

  const modal = document.createElement("div");
  modal.classList.add("viewer");

  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.classList.add("close-viewer");
  closeButton.type = "button";

  const fullImage = document.createElement("img");
  fullImage.src = "norris-full.jpg";
  fullImage.alt = clickedImage.alt;

  modal.appendChild(closeButton);
  modal.appendChild(fullImage);
  document.body.appendChild(modal);

  closeButton.addEventListener("click", closeViewer);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeViewer();
    }
  });
}

function closeViewer() {
  const modal = document.querySelector(".viewer");

  if (modal) {
    modal.remove();
  }
}

function handleKeydown(event) {
  if (event.key === "Escape") {
    closeViewer();
  }
}

menuButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);
gallery.addEventListener("click", openViewer);
document.addEventListener("keydown", handleKeydown);