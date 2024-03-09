import React, { useState } from "react";
import { Link } from "react-router-dom";
import Template_guide from "./form_components/templateGuide";
import Manage_connections from "./manage_connections";
import General from "./form_components/general";
import Accounts from "./form_components/accounts";
import Terms from "./form_components/terms";
import Grading_periods from "./form_components/grading_periods";
import Users from "./form_components/users";
import Courses from "./form_components/courses";
import Sections from "./form_components/sections";
import Enrollments from "./form_components/enrollments";
import Groups from "./form_components/groups";
import Assignments from "./form_components/assignments";

export default () => (
  <div className="vw-50 vh-50 primary-color d-flex align-items-center justify-content-center">
    <div className="container secondary-color">

      <h1 className="display-4 secondary-color">Data Geneneration Options</h1>
      <p className="lead">
        Select the data needed and click "Generate" at the bottom of the page.
      </p>
      <hr className="my-4" />

      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#templateGuide" aria-controls="templateGuide">
        Template Guide
      </button>
      <Template_guide />
      <div class="accordion" id="optionsAccordion" prefers-reduced-motion="true">
        < Courses />
        < Sections />
        < Users />
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