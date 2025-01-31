import React from "react";

export default () => (
  <div class="accordion-item">
    <h2 class="accordion-header" id="coursesHeading">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#coursesCollapse" aria-expanded="true" aria-controls="coursesCollapse">
        Course settings
      </button>
    </h2>
    <div id="coursesCollapse" class="accordion-collapse collapse show" aria-labelledby="coursesHeading" data-bs-parent="#coursesCollapse">
      <div class="accordion-body">
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="courseCountLabel">Number of Courses to Create :</span>
          <input type="number" id="courseCount" defaultValue="0" min="0" />
        </div>

        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="useCustomCourseTemplateLabel">Use custom name/id templates :</span>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="useCustomCourseTemplate" defaultValue="false" />
          </div>
        </div>

        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="courseNameTemplateLabel">Course Name Template :</span>
          <input type="text" class="form-control" id="courseNameTemplate" placeholder="Test{N[0:100]} Course{N[0:100]}" />
        </div>
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="CourseSisTemplateLabel">Course SIS-ID Template :</span>
          <input type="text" class="form-control" id="CourseSisTemplate" placeholder="course{N[0:100]}Test" />
        </div>
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="courseCodeTemplateLabel">Course Code Template :</span>
          <input type="text" class="form-control" id="courseCodeTemplate" placeholder="course{N[0:100]}Test" />
        </div>
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="courseTermLabel">Course Term :</span>
          <input type="text" class="form-control" id="courseTerm" placeholder="1" />
        </div>
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="courseMinSectionsLabel">Minimum sections per course :</span>
          <input type="number" id="courseMinSections" defaultValue="0" min="0" />
        </div>
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="courseMaxSectionsLabel">Maximum sections per course :</span>
          <input type="number" id="courseMinSections" defaultValue="0" min="0" />
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