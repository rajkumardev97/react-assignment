import React from "react";

export default ({ loadStatus }) => {
  return (
    <div className={`page__loader ${loadStatus && "show-loader"}`}>
      <img src="/assets/images/loader.gif" alt="" />
    </div>
  );
};
