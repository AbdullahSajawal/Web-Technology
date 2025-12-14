function Student(name, roll, cgpa) {
    this.name = name;
    this.roll = roll;
    this.cgpa = cgpa;
}

let students = [];

function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let cgpa = parseFloat(document.getElementById("cgpa").value);

    if (!name || !roll || isNaN(cgpa)) {
        alert("Please fill all fields");
        return;
    }

    let student = new Student(name, roll, cgpa);
    students.push(student);
    displayStudents();
    clearInputs();
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function updateStudent() {
    let roll = document.getElementById("roll").value;

    for (let i = 0; i < students.length; i++) {
        if (students[i].roll === roll) {
            students[i].name = document.getElementById("name").value;
            students[i].cgpa = parseFloat(document.getElementById("cgpa").value);
            displayStudents();
            clearInputs();
            return;
        }
    }
    alert("Student not found");
}

function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((student, index) => {
        let row = table.insertRow();

        if (student.cgpa >= 3.5) {
            row.classList.add("highlight");
        }

        row.insertCell(0).innerText = student.name;
        row.insertCell(1).innerText = student.roll;
        row.insertCell(2).innerText = student.cgpa.toFixed(2);

        let actionCell = row.insertCell(3);
        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.onclick = () => deleteStudent(index);
        actionCell.appendChild(delBtn);
    });
}

function searchStudent() {
    let roll = document.getElementById("roll").value;

    for (let student of students) {
        if (student.roll === roll) {
            alert(`Name: ${student.name}\nCGPA: ${student.cgpa}`);
            return;
        }
    }
    alert("Student not found");
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("cgpa").value = "";
}
