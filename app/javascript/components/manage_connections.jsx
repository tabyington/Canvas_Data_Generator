import React from "react";

export default () => (
  <div>
    <button type="button" class="btn btn-primary btn-sm position-fixed top-0 start-0" data-bs-toggle="offcanvas" data-bs-target="#manageConnections" aria-controls="manageConnections">+ Canvas Connection</button>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="manageConnections" aria-labelledby="manageConnectionsLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="manageConnectionsLabel">Manage Canvas Connections</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close connection management side-bar"></button>
      </div>
      <div class="offcanvas-body">
        <div>
          Create Connection offcanvas
        </div>
      </div>
    </div>
  </div>
);