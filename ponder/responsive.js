const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("hide");
    menuButton.classList.toggle("change");
});
//let menuBut = document.getelementsbyclassname(".menu-btn")[0];
//console.log(menuButton)
//menuButton.addeventListener("click", handlemenubuttonclick);
//function handlemenubuttonclick(event)
//console.log(event) or (e)
//document.querySelection("nav");
