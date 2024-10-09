const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  const totalScore =  students.reduce((acc,student) => (acc + student.score), 0)

  let avgScore = totalScore/students.length;

  return avgScore
}

console.log(getAverageStudentScore(students)); // Output: 87.5

