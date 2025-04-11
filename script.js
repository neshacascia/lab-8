// Part 1:
const student = {
  name: 'Nesha Mervin',
  age: 24,
  enrolled: true,
  courses: [
    'Algorithms',
    'Database Design',
    'Operating Systems',
    'JavaSript',
    'Web Design',
  ],
  displayInfo: () => {
    console.log(
      `Student ${student.name} is ${student.age} years old and ${
        student.enrolled ? 'is' : 'is not'
      } enrolled in school.`
    );
  },
};

console.log(student.name, student.age);
console.log(student.displayInfo());
