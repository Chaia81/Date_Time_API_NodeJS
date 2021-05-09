(async function getEducation() {
    try {
        const response = await fetch("/api/education");
        const result = await response.json();

        const educationsDiv = document.getElementById("education");

        result.educations.map(education => {
            const educationWrapper = document.createElement("div");

            const startDateP = document.createElement("p");
            startDateP.classList.add("education-startdate");
            startDateP.innerText = education.startDate;

            const endDateP = document.createElement("p");
            endDateP.classList.add("education-enddate");
            endDateP.innerText = education.endDate;

            const educationP = document.createElement("p");
            educationP.classList.add("education-education");
            educationP.innerText = education.education;

            const schoolP = document.createElement("p");
            schoolP.classList.add("education-school");
            schoolP.innerText = education.school;

            const LinkP = document.createElement("p");
            LinkP.classList.add("education-link");
            LinkP.innerText = education.Link;

            educationWrapper.appendChild(startDateP);
            educationWrapper.appendChild(endDateP);
            educationWrapper.appendChild(educationP);
            educationWrapper.appendChild(schoolP);
            educationWrapper.appendChild(LinkP);

            educationsDiv.appendChild(educationWrapper);
        });

    } catch (error) {
        console.log(error);
    }
})();