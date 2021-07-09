import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import GlobalLoader from "../common/GlobalLoader";

import "react-toastify/dist/ReactToastify.css";

function ViewCompany({ history, ...props }) {
  const initialUserState = {
    id: "",
    company_name: "",
    website: "",
    address: "",
    city: "",
    province: "",
    postal_code: "",
    image: "",
    hours: []
  };

  const [detail, setDetail] = useState(initialUserState);
  const [loading, setLoading] = useState(false);

  const companies = useSelector((state) => state.companies);

  const { list } = companies;
  
  useEffect(() => {
    getCompanyDetails();
  }, []);

  const getCompanyDetails = () => {
    setLoading(true);
    let id = props.match.params.id;
    let result = list.find((obj) => obj.id == id);
    if (result) {
      setDetail({
        id: result.id,
        company_name: result.company_name,
        website: result.website,
        address: result.address,
        city: result.city,
        province: result.province,
        postal_code: result.postal_code,
        image: result.image,
        hours: result.hours
      });
    }
    setLoading(false);
  };

  const detailCont = (
    <div className="spacetb25">
      <div className="row">
        <div className="col-md-4">
          <div className="card d-flex flex-column align-items-center text-center">
            <img
              className="card-img-top rounded-circle profile-avatar mt-3"
              src={detail.image}
              alt="photo"
            />
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Business Name</th>
                    <td className="text-secondary">
                      {detail.company_name ? detail.company_name : "NA"}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td className="text-secondary">
                      {detail.address} {detail.province} {detail.city} -{" "}
                      {detail.postal_code}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Website</th>
                    <td className="text-secondary">
                      {detail.website ? (
                        <a
                          href={detail.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {detail.website}
                        </a>
                      ) : (
                        "NA"
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Hours</th>
                    <td className="text-secondary">
                      {detail.hours.map((itm) => {
                        return (
                          <div>
                            {itm.day} {itm.open} - {itm.close}
                          </div>
                        );
                      })}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="wrapper">
      <Header />
      <Sidebar activeStatus={"manageusers"} />

      <section className="contentCntr">
        <div className="container-fluid">
          <div className="spacetb25">
            <nav className="breadcrumb__list">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#/">Admin Center</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link to={`/`}>Manage Companies</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Details
                </li>
              </ol>
            </nav>
            <div className="row">
              <div className="col-12">
                <div className="card card__custom">
                  <div className="card-header">
                    <h5 className="card-title"> &nbsp;</h5>
                  </div>
                  <div className="card-body">{detailCont}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GlobalLoader loadStatus={loading} />
      </section>
    </section>
  );
}

export default withRouter(ViewCompany);
