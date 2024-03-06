import React from "react";

export default () => (
  <div class="accordion-item">
    <h2 class="accordion-header" id="sectionsHeading">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sectionsCollapse" aria-expanded="false" aria-controls="sectionsCollapse">
        Section settings
      </button>
    </h2>
    <div id="sectionsCollapse" class="accordion-collapse collapse" aria-labelledby="sectionsHeading" data-bs-parent="#sectionsCollapse">
      <div class="accordion-body">
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="sectionNameTemplateLabel">Section Name Template :</span>
          <input type="text" class="form-control" placeholder="Test{N[0:100]} Section{N[0:100]}" />
        </div>
      </div>
      <div class="input-group input-group-sm mb-1">
        <span class="input-group-text" id="sectionSISTemplateLabel">Section SIS-ID Template :</span>
        <input type="text" class="form-control" placeholder="Test{N[0:100]}" />
      </div>

      <div class="input-group input-group-sm mb-1">
        <span class="input-group-text" id="minStudentInSectionLabel">Minimum Students per Section :</span>
        <input type="number" id="minStudentInSection" defaultValue="0" min="0" />
      </div>
      <div class="input-group input-group-sm mb-1">
        <span class="input-group-text" id="maxStudentInSectionLabel">Maximum Students per Section :</span>
        <input type="number" id="maxStudentInSection" defaultValue="0" min="0" />
      </div>

      <div class="input-group input-group-sm mb-1">
        <span class="input-group-text" id="minTeacherInSectionLabel">Minimum Teachers per Section :</span>
        <input type="number" id="minTeacherInSection" defaultValue="0" min="0" />
      </div>
      <div class="input-group input-group-sm mb-1">
        <span class="input-group-text" id="maxTeacherInSectionLabel">Maximum Teachers per Section :</span>
        <input type="number" id="maxTeacherInSection" defaultValue="0" min="0" />
      </div>

      <div class="input-group input-group-sm mb-1">
        <span class="input-group-text" id="minTAInSectionLabel">Minimum Teacher's Assistants per Section :</span>
        <input type="number" id="minTAInSection" defaultValue="0" min="0" />
      </div>
      <div class="input-group input-group-sm mb-1">
        <span class="input-group-text" id="maxTAInSectionLabel">Maximum Teacher's Assistants per Section :</span>
        <input type="number" id="maxTAInSection" defaultValue="0" min="0" />
      </div>

    </div>
  </div>
);