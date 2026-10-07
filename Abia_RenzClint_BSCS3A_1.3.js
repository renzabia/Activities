// ==========================================
// STUDENT INFORMATION SYSTEM
// ==========================================

// ---------- 10 LET VARIABLES ----------

let studentName = "Renz";
let studentAge = 20;
let studentCourse = "BS Computer Science";
let studentYear = "2nd Year";
let studentID = "2026-001";
let studentEmail = "renz@email.com";
let studentSchool = "NWSSU";
let studentCity = "Calbayog City";
let passingGrade = 75;
let studentStatus = "Active";


// ---------- 10 CONST VARIABLES ----------

const schoolName = "Northwest Samar State University";
const department = "College of Information and Computing Sciences";
const semester = "First Semester";
const subject1 = "Programming Languages";
const subject2 = "Operating Systems";
const subject3 = "Web Development";
const subject4 = "Reading in Visual Arts";
const subject5 = "Software Engineering";
const currentYear = 2026;
const systemName = "Student Information System";


// ==========================================
// 1. ARROW FUNCTIONS
// At least 5 arrow functions
// ==========================================

const greetStudent = () => {
    return `Hello, ${studentName}! Welcome to the ${systemName}.`;
};

const calculateAverage = (grades) => {
    let total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
};

const checkStatus = (grade) => {
    return grade >= passingGrade ? "Passed" : "Failed";
};

const showSubject = (subject) => {
    return `Current subject: ${subject}`;
};

const createMessage = (name, course) => {
    return `Student ${name} is taking ${course}.`;
};


// ==========================================
// 2. ARRAYS
// ==========================================

const subjects = [
    "Programming Languages",
    "Operating Systems",
    "Web Development",
    "Reading in Visual Arts",
    "Software Engineering"
];

const grades = [90, 85, 88, 92, 87];

const otherStudents = ["Mark", "John", "Anna"];


// ==========================================
// 3. DESTRUCTURED ARRAYS
// At least 3
// ==========================================

// Array Destructuring #1
const [firstSubject, secondSubject, thirdSubject] = subjects;

// Array Destructuring #2
const [firstGrade, secondGrade, thirdGrade] = grades;

// Array Destructuring #3
const [studentOne, studentTwo, studentThree] = otherStudents;


// ==========================================
// 4. OBJECT LITERALS
// ==========================================

const student = {
    name: studentName,
    age: studentAge,
    course: studentCourse,
    year: studentYear,
    id: studentID,
    email: studentEmail
};

const school = {
    name: schoolName,
    department: department,
    city: studentCity
};

const academic = {
    semester: semester,
    subjects: subjects,
    grades: grades
};


// ==========================================
// 5. DESTRUCTURED OBJECT LITERALS
// At least 3
// ==========================================

// Object Destructuring #1
const { name, age, course } = student;

// Object Destructuring #2
const { year, id, email } = student;

// Object Destructuring #3
const { name: universityName, department: college, city } = school;


// ==========================================
// 6. SPREAD OPERATOR FOR ARRAYS
// At least 2
// ==========================================

// Array Spread #1
const allSubjects = [...subjects, "Database Systems"];

// Array Spread #2
const allStudents = [...otherStudents, studentName, "James"];


// ==========================================
// 7. SPREAD OPERATOR FOR OBJECT LITERALS
// At least 2
// ==========================================

// Object Spread #1
const updatedStudent = {
    ...student,
    status: studentStatus
};

// Object Spread #2
const updatedSchool = {
    ...school,
    established: currentYear
};


// ==========================================
// 8. .MAP() ARRAYS
// At least 2
// ==========================================

// Map #1 - Add "Subject:" to every subject
const formattedSubjects = subjects.map((subject) => {
    return `Subject: ${subject}`;
});

// Map #2 - Add 5 points to every grade
const improvedGrades = grades.map((grade) => {
    return grade + 5;
});


// ==========================================
// 9. .FILTER() ARRAYS
// At least 2
// ==========================================

// Filter #1 - Get passing grades
const passingGrades = grades.filter((grade) => {
    return grade >= passingGrade;
});

// Filter #2 - Get subjects containing the word "Software"
const softwareSubjects = subjects.filter((subject) => {
    return subject.includes("Software");
});


// ==========================================
// 10. OPTIONAL CHAINING
// At least 2 object literals
// ==========================================

const studentContact = {
    name: studentName,
    contact: {
        email: studentEmail
    }
};

const studentAddress = {
    name: studentName,
    address: {
        city: studentCity
    }
};

// Optional Chaining #1
const contactNumber = studentContact.contact?.phone;

// Optional Chaining #2
const zipCode = studentAddress.address?.zip;


// ==========================================
// 11. CALCULATIONS
// ==========================================

const averageGrade = calculateAverage(grades);
const finalStatus = checkStatus(averageGrade);


// ==========================================
// 12. TEMPLATE LITERALS
// At least 10
// ==========================================

console.log(`1. ${greetStudent()}`);

console.log(`2. Student Name: ${studentName}`);

console.log(`3. Age: ${studentAge}`);

console.log(`4. Course: ${studentCourse}`);

console.log(`5. Year Level: ${studentYear}`);

console.log(`6. Student ID: ${studentID}`);

console.log(`7. Email: ${studentEmail}`);

console.log(`8. School: ${schoolName}`);

console.log(`9. Department: ${department}`);

console.log(`10. City: ${studentCity}`);

console.log(`11. Average Grade: ${averageGrade.toFixed(2)}`);

console.log(`12. Academic Status: ${finalStatus}`);

console.log(`13. First Subject: ${firstSubject}`);

console.log(`14. Second Subject: ${secondSubject}`);

console.log(`15. Third Subject: ${thirdSubject}`);

console.log(`16. First Grade: ${firstGrade}`);

console.log(`17. Second Grade: ${secondGrade}`);

console.log(`18. Third Grade: ${thirdGrade}`);

console.log(`19. ${createMessage(name, course)}`);

console.log(`20. ${showSubject(subject1)}`);


// ==========================================
// DISPLAY OTHER RESULTS
// ==========================================

console.log("------ MAP RESULTS ------");
console.log(formattedSubjects);
console.log(improvedGrades);

console.log("------ FILTER RESULTS ------");
console.log(passingGrades);
console.log(softwareSubjects);

console.log("------ SPREAD RESULTS ------");
console.log(allSubjects);
console.log(allStudents);

console.log("------ UPDATED OBJECTS ------");
console.log(updatedStudent);
console.log(updatedSchool);

console.log("------ OPTIONAL CHAINING ------");
console.log(`Contact Number: ${contactNumber ?? "No contact number provided"}`);
console.log(`Zip Code: ${zipCode ?? "No zip code provided"}`);

console.log("------ DESTRUCTURED DATA ------");
console.log(studentOne, studentTwo, studentThree);
console.log(universityName, college, city);