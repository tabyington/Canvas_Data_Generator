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
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="courseCountLabel">Number of Courses to Create :</span>
          <input type="number" id="observerCount" defaultValue="0" min="0" />
        </div>
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="courseNameTemplateLabel">Course Name Template :</span>
          <input type="text" class="form-control" placeholder="Test{N[0:100]} Course{N[0:100]}" />
        </div>
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="CourseSisTemplateLabel">Course SIS-ID Template :</span>
          <input type="text" class="form-control" placeholder="course{N[0:100]}Test" />
        </div>
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="courseCodeLabel">Course Code Template :</span>
          <input type="text" class="form-control" placeholder="course{N[0:100]}Test" />
        </div>
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="courseTermLabel">Course Term :</span>
          <input type="text" class="form-control" placeholder="1" />
        </div>
{/*
        Courses spread across new accounts
        Even account spread
        Courses spread across new terms
        Even term spread
        Courses use term dates
        Include concluded courses
*/}
      </div>
    </div>
  </div>
);