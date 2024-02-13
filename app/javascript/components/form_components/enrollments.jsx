import React from "react";

export default () => (
  <div class="accordion-item">
    <h2 class="accordion-header" id="enrollmentsHeading">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#enrollmentsCollapse" aria-expanded="false" aria-controls="enrollmentsCollapse">
        Enrollment settings
      </button>
    </h2>
    <div id="enrollmentsCollapse" class="accordion-collapse collapse" aria-labelledby="enrollmentsHeading" data-bs-parent="#enrollmentsCollapse">
      <div class="accordion-body">
        enrollments
      </div>
    </div>
  </div>
);