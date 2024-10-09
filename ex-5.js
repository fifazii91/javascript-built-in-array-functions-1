const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let total = students.reduce((acc, student) => acc + student.score, 0);

  let avg = total / students.length;

  return avg;
}

console.log(getAverageStudentScore(students)); // Output: 87.5
