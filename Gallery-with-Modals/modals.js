const gallery = document.querySelector(".gallery");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

gallery.addEventListener("click", openModal);

function openModal(e) {
    const clickedImage = e.target;

    if (clickedImage.tagName === "IMG") {
        const smallImage = clickedImage.src;
        const largeImage = smallImage.replace("-sm", "-full");

        modalImage.src = largeImage;
        modalImage.alt = clickedImage.alt;

        modal.showModal();
    }
}

closeButton.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});