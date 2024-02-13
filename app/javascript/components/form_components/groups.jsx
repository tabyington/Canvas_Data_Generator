import React from "react";

export default () => (
  <div class="accordion-item">
    <h2 class="accordion-header" id="groupsHeading">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#groupsCollapse" aria-expanded="false" aria-controls="groupsCollapse">
        Group settings
      </button>
    </h2>
    <div id="groupsCollapse" class="accordion-collapse collapse" aria-labelledby="groupsHeading" data-bs-parent="#groupsCollapse">
      <div class="accordion-body">
        groups
      </div>
    </div>
  </div>
);