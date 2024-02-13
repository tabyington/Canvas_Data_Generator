import React from "react";

export default () => (
  <div class="accordion-item">
    <h2 class="accordion-header" id="coursesHeading">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coursesCollapse" aria-expanded="false" aria-controls="coursesCollapse">
        Course settings
      </button>
    </h2>
    <div id="coursesCollapse" class="accordion-collapse collapse" aria-labelledby="coursesHeading" data-bs-parent="#coursesCollapse">
      <div class="accordion-body">
        courses
      </div>
    </div>
  </div>
);