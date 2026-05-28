function convert(grade) {
    let points;

    switch (grade) {
        case "A":
            points = 4;
            break;
        case "B":
            points = 3;
            break;
        case "C":
            points = 2;
            break;
        case "D":
            points = 1;
            break;
        case "F":
            points = 0;
            break;
        default:
            alert("Not a valid grade");
            points = -1;
    }

    return points;
}

const grades = ["A", "B", "C", "D", "F"];

const gradePoints = grades.map(function (grade) {
    return convert(grade);
});

document.querySelector("#grades-output").textContent = `Grade points: ${gradePoints.join(", ")}`;

console.log("Grades:");
grades.forEach(function (grade) {
    console.log(`${grade} = ${convert(grade)}`);
});

const words = ["watermelon", "peach", "apple", "tomato", "grape"];

const wordList = document.querySelector("#word-list");

words.forEach(function (word) {
    const listItem = document.createElement("li");
    listItem.textContent = word;
    wordList.appendChild(listItem);
});

const shortWords = words.filter(function (word) {
    return word.length < 6;
});

const shortWordList = document.querySelector("#short-word-list");

shortWords.forEach(function (word) {
    const listItem = document.createElement("li");
    listItem.textContent = word;
    shortWordList.appendChild(listItem);
});

const wordLengths = words.map(function (word) {
    return word.length;
});

document.querySelector("#word-lengths").textContent = `Word lengths: ${wordLengths.join(", ")}`;

const totalLetters = words.reduce(function (total, word) {
    return total + word.length;
}, 0);

document.querySelector("#total-letters").textContent = `Total letters: ${totalLetters}`;

const appleIndex = words.indexOf("apple");

document.querySelector("#apple-index").textContent = `The index of apple is: ${appleIndex}`;

console.log("Original words:", words);
console.log("Short words:", shortWords);
console.log("Word lengths:", wordLengths);
console.log("Total letters:", totalLetters);
console.log("Apple index:", appleIndex);

const students = [
    { last: "Andrus", first: "Aaron" },
    { last: "Masa", first: "Manny" },
    { last: "Tanda", first: "Tamanda" }
];

const studentList = document.querySelector("#student-list");

students.forEach(function (student) {
    const studentCard = `
        <div class="student-card">
            <h3>${student.first} ${student.last}</h3>
            <p>First Name: ${student.first}</p>
            <p>Last Name: ${student.last}</p>
        </div>
    `;

    studentList.innerHTML += studentCard;
});

const studentNames = students.map(function (student) {
    return `${student.first} ${student.last}`;
});

console.log("Student names:", studentNames);

document.querySelector("#year").textContent = new Date().getFullYear();