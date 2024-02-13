import React from "react";

export default () => (
  <div class="accordion-item">
    <h2 class="accordion-header" id="gradingPeriodsHeading">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#gradingPeriodsCollapse" aria-expanded="false" aria-controls="gradingPeriodsCollapse">
        Grading period settings
      </button>
    </h2>
    <div id="gradingPeriodsCollapse" class="accordion-collapse collapse" aria-labelledby="gradingPeriodsHeading" data-bs-parent="#gradingPeriodsCollapse">
      <div class="accordion-body">
        Generate new grading periods
        Generate grading periods per new term
        Create grading periods for existing account(s)
        Create grading periods for existing term(s)
        Evenly distribute new grading periods
        Number of new grading periods
        Number of new grading periods range
        Grading period name template
        Grading period SIS template
      </div>
    </div>
  </div>
);