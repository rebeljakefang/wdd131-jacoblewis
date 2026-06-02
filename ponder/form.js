// retriveve the form from the dom print the result 
const form = document.querySelector("#fsyForm");

// add an event listener to the form to detect submit
form.addEventListener("submit", Event => {
    Event.preventDefault();
    console.log(Event);
    console.log(form.firstName.value);
//print last name and email

});