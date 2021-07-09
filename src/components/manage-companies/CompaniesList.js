import React from "react";
import swal from "sweetalert";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { deleteCompany } from "../../actions/companies.action";
import { ColumnDirective } from "@syncfusion/ej2-react-grids";
import SyncFusionTable from "../common/Tables/SyncFusionTable";
import GlobalLoader from "../common/GlobalLoader";

import "react-toastify/dist/ReactToastify.css";

const CompaniesList = ({ history, ...props }) => {
  const dispatch = useDispatch();

  const companies = useSelector((state) => state.companies);

  const BusinessNameTemplate = (props) => {
    return (
      <div>
        <Link to={`company/detail/${props.id}`}>{props.company_name}</Link>
      </div>
    );
  };

  const DeleteTemplate = (props) => {
    return (
      <div>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => handleAlert(props.id)}
        >
          <i className="fa fa-trash" />
        </button>
      </div>
    );
  };

  const handleAlert = (id) => {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = `<div style="text-align:center"> <p><b>Are you sure want to Delete Company?</b>`;

    swal({
      content: wrapper,
      buttons: {
        OK: {
          text: "OK",
          className: "btn-info"
        },
        Cancel: {
          text: "Cancel",
          className: "btn-danger"
        }
      }
    }).then((value) => {
      switch (value) {
        case "OK":
          handleDeleteCompany(id);
          break;

        case "Cancel":
          break;

        default:
          console.log("user rejected");
      }
    });
  };

  const handleDeleteCompany = (id) => {
    dispatch(deleteCompany(id))
      .then((response) => {
        console.log(response);
        toast("Company Deleted Successfully !!", { type: "success" });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  let companyListCont;

  const syncFusionTableColDir = [
    <ColumnDirective
      headerText="Business ID"
      field="id"
      clipMode="EllipsisWithTooltip"
      width="200"
    />,
    <ColumnDirective
      headerText="Business Name"
      field="company_name"
      template={BusinessNameTemplate}
    />,
    <ColumnDirective
      headerText="Website"
      field="website"
      clipMode="EllipsisWithTooltip"
    />,
    <ColumnDirective
      headerText="Delete"
      field="id"
      allowFiltering={false}
      allowSorting={false}
      width="100"
      template={DeleteTemplate}
    />
  ];

  if (companies && companies.list && companies.list.length) {
    companyListCont = (
      <SyncFusionTable data={companies.list} colDirs={syncFusionTableColDir} />
    );
  } else {
    companyListCont = <div></div>;
  }

  return (
    <div className="col-sm-12">
      {companyListCont}
      <GlobalLoader loadStatus={companies.loading} />
    </div>
  );
};

export default withRouter(CompaniesList);
