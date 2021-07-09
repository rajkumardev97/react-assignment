import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

function Sidebar({ history, ...props }) {
  const { activeStatus } = props;

  const handleSidebarToggle = () => {
    $(function () {
      $(".navBox").removeClass("opened");
      $(".tab-overlay").removeClass("show-overlay");
      $("body").removeClass("tab-hidden");
    });
  };

  return (
    <div className="navBox">
      <div className={`tab-overlay`} onClick={handleSidebarToggle}></div>

      <div className="nav__inner">
        <div className="nav__menu">
          <ul>
            <li>
              <a href="#/">
                <span className="icon-grid nav__icons"></span>Admin Center
              </a>
            </li>

            <li className={`${activeStatus === "managecompanies" && "active"}`}>
              <Link to={`/`}>
                <img
                  className=" nav__icons"
                  src="/assets/images/manage_company_icon.png"
                  alt="companies"
                />
                Manage Companies
                {/* <span class="icon-circle nav__icons"></span> */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
