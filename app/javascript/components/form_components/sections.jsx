import React from "react";

export default () => (
  <div class="accordion-item">
    <h2 class="accordion-header" id="sectionsHeading">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sectionsCollapse" aria-expanded="false" aria-controls="sectionsCollapse">
        Section settings
      </button>
    </h2>
    <div id="sectionsCollapse" class="accordion-collapse collapse" aria-labelledby="sectionsHeading" data-bs-parent="#sectionsCollapse">
      <div class="accordion-body">
        sections
      </div>
    </div>
  </div>
);