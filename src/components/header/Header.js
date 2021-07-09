import React from "react";

import { Link } from "react-router-dom";
import $ from "jquery";

import "./css/header.style.css";

function Header({ history, ...props }) {
  const handleSidebarToggle = () => {
    $(function () {
      $(".navBox").toggleClass("opened");
      $(".tab-overlay").toggleClass("show-overlay");
      $("body").toggleClass("tab-hidden");
    });
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to={`/`} className="logo__brand">
          <img src="/assets/images/company-logo.png" alt="" />
          <span className="">Company</span>
        </Link>
      </div>
      <div className="header__inner">
        <a href="#/" className="mob-tab" onClick={handleSidebarToggle}>
          <span className="icon-bar"></span>
        </a>
        <div className="header__inner">
          <div className="dropdown profile__dropdown">
            <a
              className="btn dropdown-toggle"
              href="#/"
              role="button"
              id="profile-link"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="icon-user-fill"></span>
            </a>
            <div
              className="dropdown-menu dropdown__custom"
              aria-labelledby="profile-link"
            >
              <a href="#/">
                <strong className="text-success mx-auto">Welcome</strong>
              </a>
              <a className="dropdown-item" href="#/">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
