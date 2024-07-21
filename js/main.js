import ExpData from "../data/DATAExperience.js";

document.addEventListener("DOMContentLoaded", () => {
  const experience = document.querySelector(".experience-list");
  const project = document.getElementById("project-list");

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
});
