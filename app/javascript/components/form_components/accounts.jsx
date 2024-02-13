import React from "react";

export default () => (
  <div class="accordion-item">
    <h2 class="accordion-header" id="accountHeading">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accountsCollapse" aria-expanded="false" aria-controls="accountsCollapse">
        Account generation settings
      </button>
    </h2>
    <div id="accountsCollapse" class="accordion-collapse collapse" aria-labelledby="accountsHeading" data-bs-parent="#accountsCollapse">
      <div class="accordion-body">

        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="genAccountsOption" />
          <label class="form-check-label" for="genAccountsOption">Generate new canvas subaccounts</label>
        </div>

        Number of new accounts: <input type="number" value="1" />

        Account names template: <input type="text" class="form-control" placeholder="{random_name}-1" aria-label="Account Name Template" />

        Account SIS ID template: <input type="text" class="form-control" placeholder="{random_sis}-1" aria-label="Account SIS Template" />

        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="genAccountAdmins" />
          <label class="form-check-label" for="genAccountAdmins">Generate account admins for each new account</label>
        </div>

        Number of admins per new account: <input type="number" value="1" />

        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="nestedAccounts" />
          <label class="form-check-label" for="nestedAccounts">Nest new accounts</label>
        </div>

        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="evenNests" />
          <label class="form-check-label" for="evenNests">Evenly nest accounts</label>
        </div>

        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="roundUpToNest" />
          <label class="form-check-label" for="roundUpToNest">Round up number of accounts created for even nesting</label>
        </div>

        Levels deep to nest accounts: <input type="number" value="0" />
        
      </div>
    </div>
  </div>
);