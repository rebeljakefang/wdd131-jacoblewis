// retriveve the form from the dom print the result 
const form = document.querySelector("#fsyForm");

//helper function to return checked campuses

function getCheckedCampuses(campuses) {
    return Array.form(campuses
        .filter(campus => campus.checked)
        .map(campus => campus.value)

    )
}
//helper function to return if date is valid
function isdateValid() {
    const date = document.getElementById("availbleDate").value;
    const todaysDate = new Date();
    return date > todaysDate;
}

// if the user selects one campus
// but doesnt select any campuses

form.addEventListener("submit", event=> {
    event.preventDefault();
    console.log(form.firstName.value)
    const numberofcampuses = form.travelRange.value;
    const campuses = form.campus.value;
    console.log(campuses);
    if(numberofcampuses === "one" &&
        getCheckedCampuses(campuses).length == 0)
            console.log("no campuses checked")
            document.getElementById("output").textContent = "please select one campus, ya rascal"
    })

// add an event listener to the form to detect submit
form.addEventListener("submit", Event => {
    Event.preventDefault();
    console.log(Event);
    console.log(form.firstName.value);
    console.log(form.email.value)
//print last name and email
if(!isdateValid()){
    
}
});