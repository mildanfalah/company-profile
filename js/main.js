import ExpData from "../data/DATAExperience.js";
import ProjectData from "../data/DATAProject.js";

document.addEventListener("DOMContentLoaded", () => {
  const experience = document.querySelector(".experience-list");
  const project = document.querySelector(".project-list");

  ExpData.getAll().forEach((data) => {
    experience.innerHTML += `
    <div class="list-item">
      <div class="item-date">
        <div class="time">${data.time}</div>
      </div>
      <div class="item-content">
        <div class="company">${data.company}</div>
        <div class="position">${data.position}</div>
        <div class="description">${data.description}</div>
      </div>
    </div>
    `;
  });

  ProjectData.getAll().forEach((data) => {
    project.innerHTML += `
    <a href="${data.link}" target="_blank">
      <div class="list-item">
        <div class="item-image">
          <img class="thumbnail" src="${data.image}">
        </div>
        <div class="item-content">
          <div class="project-title">${data.name}</div>
          <div class="project-desc">${data.description}</div>
        </div>
      </div>
    </a>
    `;
  });
});
