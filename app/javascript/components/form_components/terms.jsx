import React from "react";

export default () => (
  <div class="accordion-item">
    <h2 class="accordion-header" id="termsHeading">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#termsCollapse" aria-expanded="false" aria-controls="termsCollapse">
        Term generation settings
      </button>
    </h2>
    <div id="termsCollapse" class="accordion-collapse collapse" aria-labelledby="termslHeading" data-bs-parent="#termsCollapse">
      <div class="accordion-body">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="genTermsOption" />
          <label class="form-check-label" for="genTermsOption">Generate new terms</label>
        </div>
        Number of new terms: <input type="number" value="1" />
        Term name template: <input type="text" class="form-control" placeholder="{random_name}-1" aria-label="Term Name Template" />
        Term SIS ID template: <input type="text" class="form-control" placeholder="{random_sis}-1" aria-label="Term SIS Template" />
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="termsWithNoDates" />
          <label class="form-check-label" for="termsWithNoDates">Require all terms to have start and end</label>
        </div>
        Date of beginning range for new terms: <input type="text" class="form-control" placeholder="2024-06-17" aria-label="Term Start Range Date" />
        Date of ending range for new terms: <input type="text" class="form-control" placeholder="2028-12-20" aria-label="Term End Range Date" />
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="fixedTermLength" />
          <label class="form-check-label" for="fixedTermLength">Use fixed duration for terms</label>
        </div>
        Term length in days: <input type="number" value="1" />
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="simultaniousTerms" />
          <label class="form-check-label" for="simultaniousTerms">Dissalow new terms running simultaniously</label>
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="concludedTerms" />
          <label class="form-check-label" for="concludedTerms">Allow concluded terms to be created</label>
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="allAccessEqualTermLength" />
          <label class="form-check-label" for="allAccessEqualTermLength">All term access limited to term active dates</label>
        </div>
        Student Access extends start <input type="number" />
        Student Access extends end <input type="number" />
        Teacher Access extends start <input type="number" />
        Teacher Access extends end <input type="number" />
        TA Access extends start <input type="number" />
        TA Access extends end <input type="number" />
        Designer Access extends start <input type="number" />
        Designer Access extends end <input type="number" />
      </div>
    </div>
  </div>
);