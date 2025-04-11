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
  addCourse: course => {
    student.courses.push(course);
  },
};

console.log(student.name, student.age);
console.log(student.displayInfo());

// Part 2:
let jsonString = JSON.stringify(student);
console.log(jsonString);

let jsonObj = JSON.parse(jsonString);
console.log(jsonObj);

// Part 3:
const { name, courses } = student;

const scores = [62, 88, 94, 75, 54];
const [firstGrade, secondGrade] = scores;
console.log(firstGrade, secondGrade);

// Part 4:
let copiedStudentObj = { ...student };

copiedStudentObj.graduationYear = 2027;
console.log(copiedStudentObj);

const springCourses = [
  'Numeric Computing',
  'Database Programming',
  'OOP',
  'Front-end Programming',
];
const combinedCourses = [...student.courses, ...springCourses];
