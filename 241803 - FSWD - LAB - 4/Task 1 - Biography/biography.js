// Lab 4 - Task 1: Biography
// Aneeq Abdullah

// ---------------------------------------------------------------
// Part 1 + 2: biography stored in variables declared with var
// ---------------------------------------------------------------
var fullName = "Aneeq Abdullah";          // string
var degreeTitle = "BS Computer Science";  // string
var universityName = "Air University";    // string
var campusCity = "Islamabad";             // string
var semesterNo = 5;                       // number
var sectionName = "BSCS-V-A";             // string
var isCurrentlyStudying = true;           // boolean
var favouriteLanguage = "C++";            // string
var graduationYear = null;                // null (not decided yet)
var cgpa;                                 // undefined (not assigned)

console.log("------ ABOUT ME ------");
console.log("Hi, I am " + fullName + ".");
console.log("I am a " + degreeTitle + " student at " + universityName + ", " + campusCity + ".");
console.log("Right now I am in semester " + semesterNo + " (section " + sectionName + ").");
console.log("My favourite programming language is " + favouriteLanguage + ", and I am learning web development.");
console.log("Still studying? " + isCurrentlyStudying);

console.log("\n------ DATA TYPES ------");
console.log("fullName           : " + typeof fullName);
console.log("semesterNo         : " + typeof semesterNo);
console.log("isCurrentlyStudying: " + typeof isCurrentlyStudying);
console.log("graduationYear     : " + (graduationYear === null ? "null" : typeof graduationYear));
console.log("cgpa               : " + typeof cgpa);

// ---------------------------------------------------------------
// Part 3: biography as an object with nested objects
// ---------------------------------------------------------------
var me = {
  name: "Aneeq Abdullah",
  role: "Software Developer",
  student: true,
  address: {
    city: "Islamabad",
    country: "Pakistan"
  },
  degreeProgram: {
    degree: "BS Computer Science",
    university: "Air University",
    campus: "Islamabad",
    section: "BSCS-V-A",
    shift: "Shift-I",
    semester: 5
  },
  skills: {
    programming: ["C++", "JavaScript"],
    web: ["HTML", "CSS", "Bootstrap"],
    focus: "Data Structures"
  },
  projects: ["Inventory Management System", "SmartMart System", "Data Structures Implementation"],
  github: "github.com/aneeqXD"
};

console.log("\n------ BIOGRAPHY FROM OBJECT ------");
console.log(`Name     : ${me.name}`);
console.log(`Role     : ${me.role}`);
console.log(`Location : ${me.address.city}, ${me.address.country}`);
console.log(`Degree   : ${me.degreeProgram.degree}`);
console.log(`Uni      : ${me.degreeProgram.university} (${me.degreeProgram.campus})`);
console.log(`Section  : ${me.degreeProgram.section} ${me.degreeProgram.shift}, semester ${me.degreeProgram.semester}`);
console.log(`Languages: ${me.skills.programming.join(" and ")}`);
console.log(`Web      : ${me.skills.web.join(", ")}`);
console.log(`Focus    : ${me.skills.focus}`);
console.log("Projects :");
me.projects.forEach(function (project, index) {
  console.log(`   ${index + 1}) ${project}`);
});
console.log(`GitHub   : ${me.github}`);
