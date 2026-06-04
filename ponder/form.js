// retrieve the form from the dom print the result
const form = document.querySelector("#fsyForm");
const output = document.querySelector("#output");
const notesContainer = document.querySelector("#notesContainer");
const travelRange = document.querySelector("#travelRange");
const notes = document.querySelector("#notes");

// helper function to show or hide the notes field
function updateNotesField() {
if (travelRange.value === "many") {
notesContainer.hidden = false;
notes.required = true;
} else {
notesContainer.hidden = true;
notes.required = false;
notes.value = "";
}
}

// helper function to return checked campuses
function getCheckedCampuses(campuses) {
return Array.from(campuses)
.filter(campus => campus.checked)
.map(campus => campus.value);
}

// helper function to return if date is valid
function isdateValid() {
const date = document.getElementById("availableDate").value;
const selectedDate = new Date(date);
const todaysDate = new Date();


todaysDate.setHours(0, 0, 0, 0);

return selectedDate > todaysDate;


}

// when the user changes one campus or many campuses,
// update whether the notes box should show
travelRange.addEventListener("change", updateNotesField);

// add an event listener to the form to detect submit
form.addEventListener("submit", event => {
event.preventDefault();


console.log(event);
console.log(form.firstName.value);
console.log(form.lastName.value);
console.log(form.email.value);

const numberofcampuses = form.travelRange.value;
const campuses = document.querySelectorAll("input[name='campus']");
const checkedCampuses = getCheckedCampuses(campuses);
const travelNotes = form.notes.value.trim();

console.log(checkedCampuses);

output.textContent = "";

// if the user doesnt select any campuses
if (checkedCampuses.length === 0) {
    console.log("no campuses checked");
    output.textContent = "Please select at least one campus.";
    return;
}

// if the user selects many campuses
// but only selects one campus
if (numberofcampuses === "many" && checkedCampuses.length < 2) {
    console.log("not enough campuses checked");
    output.textContent = "Please select at least two campuses.";
    return;
}

// if the user selects many campuses
// but does not write travel notes
if (numberofcampuses === "many" && travelNotes === "") {
    console.log("no travel notes");
    output.textContent = "Please enter travel notes.";
    return;
}

// if the date is not later than today
if (!isdateValid()) {
    console.log("date is not valid");
    output.textContent = "Please choose a date later than today.";
    return;
}

// print the result
output.textContent =
    "Preference Submitted\n" +
    "Name: " + form.firstName.value.trim() + " " + form.lastName.value.trim() + "\n" +
    "Email: " + form.email.value.trim() + "\n" +
    "Campuses: " + checkedCampuses.join(", ") + "\n" +
    "Available Date: " + form.availableDate.value + "\n" +
    "Notes: " + (travelNotes || "None");

form.reset();
updateNotesField();


});

// start with the notes field hidden unless many is selected
updateNotesField();
