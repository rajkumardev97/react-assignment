import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import "./css/404.css"

class Component404 extends Component {
  componentDidMount() {
   /* if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }*/
  }
  render() {
    return (
     
	<div id="notfound">
  <div class="notfound">
    <div class="notfound-404">
      <h1>404</h1>
    </div>
    <h2>Oops! Nothing was found <code>{this.props.pathnotfound}</code></h2>
    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable. <Link to="/">Return to homepage</Link></p>
    
  </div>
</div>
    );
  }
}

Component404.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Component404);
