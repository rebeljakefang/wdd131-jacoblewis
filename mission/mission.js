const themeSelector = document.querySelector("#theme");
const logo = document.querySelector("img");

themeSelector.addEventListener("change", changeTheme);

function changeTheme() {
    if (themeSelector.value === "dark") {
        document.body.classList.add("dark");
        logo.src = "byui-logo-white.png";
    } else {
        document.body.classList.remove("dark");
        logo.src = "byui-logo-blue.webp";
    }
}