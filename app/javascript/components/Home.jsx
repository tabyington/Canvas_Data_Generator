import React from "react";
import { Link } from "react-router-dom";

export default () => (
  
  <div className="vw-50 vh-50 primary-color d-flex align-items-center justify-content-center">
    <div className="container secondary-color">
    <div>
      Create Connection right offcanvas
    </div>
      <h1 className="display-4 secondary-color">Data Gen Options</h1>
      <p className="lead">
        Select the data generation options needed and click "Generate" below.
      </p>
      <hr className="my-4" />

      <p>
        Select host
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
        </select>
        Account id
      </p>

      <p>
        Accounts:

      </p>

      <p>
        Terms:
      </p>

      <p>
        Grading Periods:
      </p>

      <p>
        Groups:
      </p>

      <p>
        Courses:
      </p>

      <p>
        Sections:
      </p>

      <p>
        Enrollments:
      </p>

      <p>
        Assignments:
      </p>

      <p>
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
      </p>

      <p>
        Output:
      </p>

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