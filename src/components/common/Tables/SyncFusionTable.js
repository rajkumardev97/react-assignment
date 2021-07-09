import React from "react";
import { withRouter } from "react-router-dom";
import {
  ColumnsDirective,
  GridComponent,
  Toolbar,
  Page,
  Sort,
  Filter,
  Inject
} from "@syncfusion/ej2-react-grids";

function SyncFusionTable({ history, ...props }) {
  const { data, colDirs } = props;

  let filterSettings = { type: "Menu" };
  let toolbarOptions = ["Search"];

  return (
    <div className="control-pane">
      <div className="control-section row">
        <GridComponent
          id="overviewgrid"
          dataSource={data}
          toolbar={toolbarOptions}
          enableHover={true}
          allowSorting={true}
          allowPaging={true}
          pageSettings={{ pageSize: 10, pageCount: 5 }}
          allowFiltering={true}
          filterSettings={filterSettings}
        >
          <ColumnsDirective>{colDirs.map((itm) => itm)}</ColumnsDirective>
          <Inject services={[Toolbar, Filter, Page, Sort]} />
        </GridComponent>{" "}
      </div>
    </div>
  );
}

export default withRouter(SyncFusionTable);
