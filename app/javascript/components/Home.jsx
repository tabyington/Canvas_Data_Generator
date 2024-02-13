import React, { useState } from "react";
import { Link } from "react-router-dom";
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

function Form() {
  const [formData, setFormData] = useState({
    general: {},
  });

  const handleGeneralSettingsChange = (general) => {
    setFormData({ ...formData, general });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
  };

  return (
    <div className="vw-50 vh-50 primary-color d-flex align-items-center justify-content-center">
      <div className="container secondary-color">
        <form onSubmit={handleSubmit}>
          <Manage_connections />
          <h1 className="display-4 secondary-color">Data Geneneration Options</h1>
          <p className="lead">
            Select the data needed and click "Generate" at the bottom of the page.
          </p>
          <hr className="my-4" />

          <div class="accordion" id="optionsAccordion" prefers-reduced-motion="true">
            < General />
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
        </form>
      </div>
    </div>

  );
}

export default home;