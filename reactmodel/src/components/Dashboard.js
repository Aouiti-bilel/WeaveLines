import React, { Component } from "react";

import GoogleAuthorize from "react-google-authorize";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { oauthGoogle } from "../redux/actions/AuthActions";
import Contacts from "./Contacts";
class Dashboard extends Component {
  responseGoogle = res => {
    this.props.oauthGoogle(res.access_token);
  };

  render() {
    const { contacts } = this.props.auth;

    let dashboardContent;
    if (!Object.keys(contacts).length > 0) {
      dashboardContent = (
        <div>
          <p>
            You have not yet setup a Contact List, You can add it from Google
            Contacts{" "}
          </p>
          <GoogleAuthorize
            clientId="10239637592-lmmkv101b2u5tgp9idr2t2nkhseqvncv.apps.googleusercontent.com"
            buttonText="ADD CONTATCTS"
            scope="https://www.googleapis.com/auth/contacts"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            className="btn btn-outline-danger"
          />
        </div>
      );
    } else {
      dashboardContent = <Contacts />;
    }
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  oauthGoogle: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { oauthGoogle }
)(Dashboard);
