import React from "react";

export default () => (
  <div class="accordion-item">
    <h2 class="accordion-header" id="usersHeading">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#usersCollapse" aria-expanded="true" aria-controls="usersCollapse">
        User settings
      </button>
    </h2>
    <div id="usersCollapse" class="accordion-collapse collapse" aria-labelledby="usersHeading" data-bs-parent="#usersCollapse">
      <div class="accordion-body">

        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="studentCountLabel">Number of Students to Create :</span>
          <input type="number" id="studentCount" defaultValue="0" min="0" />
        </div>
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text col-sm-15" id="sudentNameTemplateLabel">Student Name Template :</span>
          <input type="text" class="form-control" placeholder="Student{N[0:100]} Test{N[0:100]}" />
        </div>
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="sudentSisTemplateLabel">Student SIS-ID Template :</span>
          <input type="text" class="form-control" placeholder="s{N[0:100]}Test" />
        </div>
        <hr />

        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="teachertCountLabel">Number of teachers to Create :</span>
          <input type="number" id="teacherCount" defaultValue="0" min="0" />
        </div>
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="teacherNameTemplateLabel">Teacher Name Template :</span>
          <input type="text" class="form-control" placeholder="Teacher{N[0:100]} Test{N[0:100]}" />
        </div>
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="teacherSisTemplateLabel">Teacher SIS-ID Template :</span>
          <input type="text" class="form-control" placeholder="t{N[0:100]}Test" />
        </div>
        <hr />

        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="TACountLabel">Number of TAs to Create :</span>
          <input type="number" id="TACount" defaultValue="0" min="0" />
        </div>
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="TANameTemplateLabel">TA Name Template :</span>
          <input type="text" class="form-control" placeholder="TeacherAssistant{N[0:100]} Test{N[0:100]}" />
        </div>
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="TASisTemplateLabel">TA SIS-ID Template :</span>
          <input type="text" class="form-control" placeholder="ta{N[0:100]}Test" />
        </div>
        <hr />

        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="observerCountLabel">Number of Observers to Create :</span>
          <input type="number" id="observerCount" defaultValue="0" min="0" />
        </div>
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="observerNameTemplateLabel">Observer Name Template :</span>
          <input type="text" class="form-control" placeholder="Observer{N[0:100]} Test{N[0:100]}" />
        </div>
        <div class="input-group input-group-sm mb-1">
          <span class="input-group-text" id="ObserverSisTemplateLabel">Observer SIS-ID Template :</span>
          <input type="text" class="form-control" placeholder="o{N[0:100]}Test" />
        </div>

      </div>
    </div>
  </div>
);