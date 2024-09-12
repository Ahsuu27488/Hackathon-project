// Assuming you have a TypeScript compiler and a build process to generate the corresponding JavaScript file
var resumeForm = document.getElementById("resumeForm");
var resumeOutput = document.getElementById("resumeOutput");
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(resumeForm);
    var resumeData = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        education: formData.get("education"),
        skills: formData.get("skills"),
        experience: formData.get("experience"),
    };
    // Generate the resume content based on resumeData
    var resumeContent = "\n    <h2>".concat(resumeData.name, "</h2>\n    <p>").concat(resumeData.email, "</p>\n    <p>").concat(resumeData.phone, "</p>\n    <h3>Education</h3>\n    <p>").concat(resumeData.education, "</p>\n    <h3>Skills</h3>\n    <p>").concat(resumeData.skills, "</p>\n    <h3>Work Experience</h3>\n    <p>").concat(resumeData.experience, "</p>\n  ");
    resumeOutput.innerHTML = resumeContent;
});
