// ==========================================
// STUDENT MANAGEMENT SYSTEM
// ==========================================

// 1. OBJECT LITERALS
const school = {
    name: "Northwest Samar State University",
    location: "Calbayog City"
};

const course = {
    name: "BS Computer Science",
    department: "CCIS"
};


// ==========================================
// 2. CLASS 1 - PERSON
// ==========================================

class Person {

    // CONSTRUCTOR #1
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}


// ==========================================
// 3. CLASS 2 - STUDENT
// INHERITANCE #1
// ==========================================

class Student extends Person {

    // CONSTRUCTOR #2
    constructor(name, age, studentID, grade) {
        super(name, age);

        // ENCAPSULATION
        this._studentID = studentID;
        this._grade = grade;
    }

    // METHOD #2
    getStudentID() {
        return this._studentID;
    }

    // METHOD #3
    getGrade() {
        return this._grade;
    }

    // POLYMORPHISM
    introduce() {
        return `Hello! I am ${this.name}, a student with ID ${this._studentID}.`;
    }
}


// ==========================================
// 4. CLASS 3 - TEACHER
// INHERITANCE #2
// ==========================================

class Teacher extends Person {

    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    // METHOD #4
    introduce() {
        return `Hello! I am ${this.name}, and I teach ${this.subject}.`;
    }
}


// ==========================================
// 5. CLASS 4 - COURSE
// ==========================================

class Course {

    constructor(courseName) {
        this.courseName = courseName;
    }

    // METHOD #5
    showCourse() {
        return `The student is taking ${this.courseName}.`;
    }
}


// ==========================================
// ENCAPSULATION #2
// ==========================================

class StudentRecord {

    constructor(student) {
        this._student = student;
    }

    // METHOD #6
    getStudentInformation() {
        return `Student: ${this._student.name}, Grade: ${this._student.getGrade()}`;
    }
}


// ==========================================
// ABSTRACTION
// ==========================================

class SchoolSystem {

    // METHOD #7
    showStudentStatus(student) {

        // The user does not need to know how the status is calculated.
        if (student.getGrade() >= 75) {
            return "Status: PASSED";
        } else {
            return "Status: FAILED";
        }
    }
}


// ==========================================
// VARIABLES / PROPERTIES
// ==========================================

let studentName = "Renz";
let studentAge = 20;
let studentGrade = 88;


// ==========================================
// 3 ARRAYS
// ==========================================

let subjects = [
    "Art Appreciation",
    "Operating Systems",
    "Application Development"
];

let grades = [88, 90, 85];

let activities = [
    "Quiz",
    "Assignment",
    "Final Project"
];


// ==========================================
// OBJECTS
// ==========================================

const student1 = new Student(
    studentName,
    studentAge,
    "2026-001",
    studentGrade
);

const student2 = new Student(
    "Mark",
    21,
    "2026-002",
    72
);

const teacher1 = new Teacher(
    "Prof. John",
    35,
    "Programming"
);

const course1 = new Course(
    "BS Computer Science"
);


// ==========================================
// 3 CONDITIONALS
// ==========================================

// CONDITIONAL #1
if (student1.getGrade() >= 75) {
    console.log(`${student1.name} passed the subject.`);
} else {
    console.log(`${student1.name} failed the subject.`);
}


// CONDITIONAL #2
if (student2.getGrade() >= 90) {
    console.log(`${student2.name} got an excellent grade.`);
} else if (student2.getGrade() >= 75) {
    console.log(`${student2.name} passed.`);
} else {
    console.log(`${student2.name} needs improvement.`);
}


// CONDITIONAL #3
if (studentGrade >= 85) {
    console.log("Great job! Keep up the good work.");
}


// ==========================================
// 3 LOOPS
// ==========================================

// LOOP #1 - FOR LOOP
console.log("\nSubjects:");

for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i]);
}


// LOOP #2 - FOR...OF LOOP
console.log("\nGrades:");

for (let grade of grades) {
    console.log(`Grade: ${grade}`);
}


// LOOP #3 - FOR EACH LOOP
console.log("\nActivities:");

activities.forEach(function(activity) {
    console.log(`Activity: ${activity}`);
});


// ==========================================
// DISPLAY INFORMATION
// ==========================================

console.log("\n===== STUDENT INFORMATION =====");

console.log(student1.introduce());

console.log(`Student ID: ${student1.getStudentID()}`);

console.log(`Grade: ${student1.getGrade()}`);

console.log(course1.showCourse());


// ==========================================
// POLYMORPHISM EXAMPLE
// ==========================================

console.log("\n===== POLYMORPHISM =====");

console.log(student1.introduce());
console.log(teacher1.introduce());


// ==========================================
// ABSTRACTION EXAMPLE
// ==========================================

const system = new SchoolSystem();

console.log("\n===== STUDENT STATUS =====");

console.log(system.showStudentStatus(student1));
console.log(system.showStudentStatus(student2));


// ==========================================
// ENCAPSULATION EXAMPLE
// ==========================================

const record = new StudentRecord(student1);

console.log("\n===== ENCAPSULATION =====");

console.log(record.getStudentInformation());


// ==========================================
// OBJECT LITERALS
// ==========================================

console.log("\n===== SCHOOL INFORMATION =====");

console.log(`School: ${school.name}`);
console.log(`Location: ${school.location}`);

console.log(`Course: ${course.name}`);
console.log(`Department: ${course.department}`);