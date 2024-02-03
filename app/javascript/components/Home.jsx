import React from "react";
import { Link } from "react-router-dom";

export default () => (

  <div className="vw-50 vh-50 primary-color d-flex align-items-center justify-content-center">
    <div className="container secondary-color">
      <div>

        <button type="button" class="btn btn-primary btn-sm position-fixed top-0 start-0" data-bs-toggle="offcanvas" data-bs-target="#manageConnections" aria-controls="manageConnections">+ Canvas Connection</button>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="manageConnections" aria-labelledby="manageConnectionsLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="manageConnectionsLabel">Manage Canvas Connections</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close connection management side bar"></button>
          </div>
          <div class="offcanvas-body">
            <div>
              Create Connection offcanvas
            </div>
          </div>
        </div>
      </div>

      <h1 className="display-4 secondary-color">Data Gen Options</h1>
      <p className="lead">
        Select the data generation options needed and click "Generate" at the bottom of the page.
      </p>
      <hr className="my-4" />

      <div class="accordion" id="optionsAccordion" prefers-reduced-motion="true">
        <div class="accordion-item">
          <h2 class="accordion-header" id="generalHeading">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#generalCollapse" aria-expanded="true" aria-controls="generalCollapse">
              General settings
            </button>
          </h2>
          <div id="generalCollapse" class="accordion-collapse collapse show" aria-labelledby="generalHeading" data-bs-parent="#generalCollapse">
            <div class="accordion-body">
              <div class="alert alert-info" role="alert">
                If you don't set all three values, canvas data can still be generated, but can only be stored locally for manual upload to canvas sis import worker.
              </div>
              Host:
              <select class="form-select" aria-label="Canvas Connection">
                <option selected='true'>Canvas Connections</option>
              </select>
              Parent Account ID: <input type="text" class="form-control" placeholder="Account ID" aria-label="Account ID" />
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="autoUpload" />
                <label class="form-check-label" for="autoUpload">Upload to Canvas host when finished generating data</label>
              </div>
            </div>
          </div>
        </div>

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

        <div class="accordion-item">
          <h2 class="accordion-header" id="gradingPeriodsHeading">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#gradingPeriodsCollapse" aria-expanded="false" aria-controls="gradingPeriodsCollapse">
              Grading period settings
            </button>
          </h2>
          <div id="gradingPeriodsCollapse" class="accordion-collapse collapse" aria-labelledby="gradingPeriodsHeading" data-bs-parent="#gradingPeriodsCollapse">
            <div class="accordion-body">
              grading periods
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="groupsHeading">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#groupsCollapse" aria-expanded="false" aria-controls="groupsCollapse">
                Group settings
              </button>
            </h2>
          </div>
          <div id="groupsCollapse" class="accordion-collapse collapse" aria-labelledby="groupsHeading" data-bs-parent="#groupsCollapse">
            <div class="accordion-body">
              groups
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="coursesHeading">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coursesCollapse" aria-expanded="false" aria-controls="coursesCollapse">
                Course settings
              </button>
            </h2>
          </div>
          <div id="coursesCollapse" class="accordion-collapse collapse" aria-labelledby="coursesHeading" data-bs-parent="#coursesCollapse">
            <div class="accordion-body">
              courses
            </div>
          </div>
        </div>

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

        <div class="accordion-item">
          <h2 class="accordion-header" id="assignmentsHeading">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#assignmentsCollapse" aria-expanded="false" aria-controls="assignmentsCollapse">
              Assignment settings
            </button>
          </h2>
          <div id="assignmentsCollapse" class="accordion-collapse collapse" aria-labelledby="assignmentsHeading" data-bs-parent="#assignmentsCollapse">
            <div class="accordion-body">
              assignments
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="usersqHeading">
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
      </div>

      <hr className="my-4" />
      <Link
        to="/home"
        className="btn btn-lg custom-button"
        role="button"
      >
        Generate
      </Link>
    </div>
  </div>

);