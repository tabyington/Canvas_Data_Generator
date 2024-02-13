import React from "react";

export default () => (
  <div class="accordion-item">
    <h2 class="accordion-header" id="assignmentsHeading">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#assignmentsCollapse" aria-expanded="false" aria-controls="assignmentsCollapse">
        Assignment settings
      </button>
    </h2>
    <div id="assignmentsCollapse" class="accordion-collapse collapse" aria-labelledby="assignmentsHeading" data-bs-parent="#assignmentsCollapse">
      <div class="accordion-body">
        Assignment types
        Min assignment value
        Max assignment value
        Include ungraded assignments
        Number of assignments
        Assignments without due dates
        Individualized due dates
        Group assignments
      </div>
    </div>
  </div>
);