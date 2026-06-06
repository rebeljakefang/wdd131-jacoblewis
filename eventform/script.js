const form = document.querySelector("#ticketForm");
const typeSelect = document.querySelector("#type");
const extraField = document.querySelector("#extraField");
const extraLabel = document.querySelector("#extraLabel");
const extraInput = document.querySelector("#extraInput");
const errors = document.querySelector("#errors");
const ticketInfo = document.querySelector("#ticketInfo");

function showExtraField() {
  const type = typeSelect.value;

  extraInput.value = "";

  if (type === "student") {
    extraField.classList.remove("hidden");
    extraLabel.textContent = "Student I#";
    extraInput.placeholder = "123456789";
  } else if (type === "guest") {
    extraField.classList.remove("hidden");
    extraLabel.textContent = "Access Code";
    extraInput.placeholder = "EVENT131";
  } else {
    extraField.classList.add("hidden");
    extraLabel.textContent = "Student I#";
    extraInput.placeholder = "";
  }
}

function dateIsInFuture(dateValue) {
  const selectedDate = new Date(dateValue + "T00:00:00");
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return selectedDate > today;
}

function displayErrors(errorList) {
  errors.innerHTML = "";

  if (errorList.length === 0) {
    return;
  }

  const ul = document.createElement("ul");

  errorList.forEach(function(error) {
    const li = document.createElement("li");
    li.textContent = error;
    ul.appendChild(li);
  });

  errors.appendChild(ul);
}

function displayTicket(name, date, type) {
  const formattedType = type === "student" ? "Student" : "Guest";

  ticketInfo.innerHTML = `
    <h2>Ticket Reserved</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Type:</strong> ${formattedType}</p>
  `;
}

typeSelect.addEventListener("change", showExtraField);

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const errorList = [];
  const fullName = document.querySelector("#fullName").value.trim();
  const eventDate = document.querySelector("#eventDate").value;
  const type = typeSelect.value;
  const extraValue = extraInput.value.trim();

  ticketInfo.innerHTML = "";

  if (fullName === "") {
    errorList.push("Please enter your full name.");
  }

  if (eventDate === "") {
    errorList.push("Please choose an event date.");
  } else if (!dateIsInFuture(eventDate)) {
    errorList.push("The event date must be later than today.");
  }

  if (type === "") {
    errorList.push("Please choose Student or Guest.");
  }

  if (type === "student" && !/^\d{9}$/.test(extraValue)) {
    errorList.push("Student I# must be exactly 9 digits.");
  }

  if (type === "guest" && extraValue !== "EVENT131") {
    errorList.push("Access Code must be EVENT131.");
  }

  displayErrors(errorList);

  if (errorList.length === 0) {
    displayTicket(fullName, eventDate, type);
    form.reset();
    showExtraField();
  }
});