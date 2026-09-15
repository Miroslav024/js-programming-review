const students = [];

function addStudent(name, age, grade) {
  const student = {
    name: name,
    age: age,
    grade: grade,
  };
  students.push(student);
}

function displayStudents() {
  console.log("Student List:");
  for (const student of students) {
    console.log(
      `Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`,
    );
  }
}

//HOMEWORK create a function that filter students by name and return the student object if found, otherwise return null.
//HOMEWORK create a function to remove a student by name from the students array. If the student is found and removed, return true; otherwise, return false.
addStudent("Adam", 20, "A");

displayStudents();
console.log("-------------------");
addStudent("Eve", 22, "B");
displayStudents();
console.log("-------------------");


//Create a function that filters students by name
function findStudentByName(name) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === name) {
      return students[i];
    }
  }
  return null;
}

findStudentByName("Eve");
// ?????

console.log("-------------------");


//removing a student method
function removeStudent(name) {
  for (let i = students.length - 1; i >= 0; i--) {
    if (students[i].name === name) {
      students.splice(i, 1);
    }
  }
}

removeStudent("Adam");
displayStudents();
console.log("-------------------");




