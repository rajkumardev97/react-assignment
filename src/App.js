import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Provider } from "react-redux";
import store from "./store";

import Component404 from "./components/errors/Component404";
import CompaniesContainer from "./components/manage-companies/Companies.container";
import CompanyViewContainer from "./components/manage-companies/CompanyView.container";

import "./App.css";

const NotFound = ({ location }) => (
  <Component404 pathnotfound={location.pathname} />
);

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path={["/"]} component={CompaniesContainer} />
              <Route
                exact
                path="/company/detail/:id"
                component={CompanyViewContainer}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </React.Fragment>
  );
}
export default App;
