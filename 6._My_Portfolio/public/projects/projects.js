(async function getProjects(){
    try {
        const response = await fetch("/api/projects");
        const result = await response.json();

        const projectsDiv = document.getElementById("projects");

        result.projects.map(project => {
            const projectWrapper = document.createElement("div");

            const titleHeader = document.createElement("h2");
            titleHeader.classList.add("project-title");
            titleHeader.innerText = project.title;

            const descriptionP = document.createElement("p");
            descriptionP.classList.add("project-description");
            descriptionP.innerText = project.description;

            const startDateP = document.createElement("p");
            startDateP.classList.add("project-startdate");
            startDateP.innerText = project.startDate;

            const endDateP = document.createElement("p");
            endDateP.classList.add("project-enddate");
            endDateP.innerText = project.endDate;

            const languagesP = document.createElement("p");
            languagesP.classList.add("project-languages");
            languagesP.innerText = project.languages;

            const hostedLinkP = document.createElement("p");
            hostedLinkP.classList.add("project-hostedlink");
            hostedLinkP.innerText = project.hostedLink;

            const gitLinkP = document.createElement("p");
            gitLinkP.classList.add("project-gitlink");
            gitLinkP.innerText = project.gitLink;

            

            projectWrapper.appendChild(titleHeader);
            projectWrapper.appendChild(descriptionP);
            projectWrapper.appendChild(startDateP);
            projectWrapper.appendChild(endDateP);
            projectWrapper.appendChild(languagesP);
            projectWrapper.appendChild(hostedLinkP);
            projectWrapper.appendChild(gitLinkP);

            projectsDiv.appendChild(projectWrapper);
        });

    } catch (error) {
        console.log(error);
    }
})();