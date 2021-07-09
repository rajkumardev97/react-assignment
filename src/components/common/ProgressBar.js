import React from "react";

export default ({ loadStatus }) => {
  return loadStatus ? (
    <div className="col-12">
      <div className="card card__custom mg-b-20 mg-b-md-30">
        <div className="card-footer">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
