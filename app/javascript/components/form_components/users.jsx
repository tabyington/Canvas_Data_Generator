import React from "react";

export default () => (
  <div class="accordion-item">
    <h2 class="accordion-header" id="usersHeading">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#usersCollapse" aria-expanded="false" aria-controls="usersCollapse">
        User settings
      </button>
    </h2>
    <div id="usersCollapse" class="accordion-collapse collapse" aria-labelledby="usersHeading" data-bs-parent="#usersCollapse">
      <div class="accordion-body">
        Users:
        Number of students
        Student name template
        Student sis template
        Number of teachers
        Student name template
        Student sis template
        Number of TAs
        Student name template
        Student sis template
        Number of observers
        Student name template
        Student sis template
      </div>
    </div>
  </div>
);