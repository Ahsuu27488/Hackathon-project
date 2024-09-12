// Assuming you have a TypeScript compiler and a build process to generate the corresponding JavaScript file

const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLFormElement

resumeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(resumeForm);
  const resumeData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    education: formData.get("education"),
    skills: formData.get("skills"),
    experience: formData.get("experience"),
  };

  // Generate the resume content based on resumeData
  const resumeContent = `
    <h2>${resumeData.name}</h2>
    <p>${resumeData.email}</p>
    <p>${resumeData.phone}</p>
    <h3>Education</h3>
    <p>${resumeData.education}</p>
    <h3>Skills</h3>
    <p>${resumeData.skills}</p>
    <h3>Work Experience</h3>
    <p>${resumeData.experience}</p>
  `;

  resumeOutput.innerHTML = resumeContent;
});