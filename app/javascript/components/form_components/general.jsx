import React from "react";

function General({ onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
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
  );
}

export default General;