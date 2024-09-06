let students = []; // Array to hold student data

function renderStudents() {
  const list = document.getElementById("student-list");
  list.innerHTML = "";
  students.forEach((student, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${student.name} - ${student.course} - ${student.grade}
            <button class="edit" onclick="editStudent(${index})">Edit</button>
            <button class="delete" onclick="deleteStudent(${index})">Delete</button>`;
    list.appendChild(li);
  });
}

function addStudent() {
  const name = document.getElementById("student-name").value;
  const regn = document.getElementById("student-reg").value;
  const course = document.getElementById("student-course").value;
  const grade = document.getElementById("student-grade").value;

  if (name && course && grade) {
    students.push({ name, regn, course, grade });
    renderStudents();
    document.getElementById("student-name").value = "";
    document.getElementById("student-reg").value = "";
    document.getElementById("student-course").value = "";
    document.getElementById("student-grade").value = "";
  } else {
    alert("Please fill in all fields.");
  }
}

function deleteStudent(index) {
  students.splice(index, 1);
  renderStudents();
}

function editStudent(index) {
  const student = students[index];
  document.getElementById("student-name").value = student.name;
  document.getElementById("student-reg").value = student.regn;
  document.getElementById("student-course").value = student.course;
  document.getElementById("student-grade").value = student.grade;

  // Remove the student from the array after editing
  deleteStudent(index);
}
