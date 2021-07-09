import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { retrieveCompanies } from "../../actions/companies.action";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import CompaniesList from "./CompaniesList";

const Item = styled.div`
  padding: 5px;
  color: #b0ff68;
`;

function Companies({ history, ...props }) {
  useEffect(() => {
    getCompanies();
  }, []);

  const dispatch = useDispatch();

  const getCompanies = () => {
    dispatch(retrieveCompanies());
  };

  return (
    <section className="wrapper">
      <Header />
      <Sidebar activeStatus={"managecompanies"} />

      <section className="contentCntr">
        <div className="container-fluid">
          <div className="spacetb25">
            <nav className="breadcrumb__list">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#/">Admin Center</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Manage Companies
                </li>
              </ol>
            </nav>
            <div className="row">
              <div className="col-12">
                <div className="card card__custom">
                  <div className="card-header">
                    <h5 className="card-title">
                      <Item>Table Title</Item>
                    </h5>
                    <button class="btn btn-info" onClick={getCompanies}>
                      <i class="fa fa-refresh"></i>
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <CompaniesList getCompanies={getCompanies} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Companies;
