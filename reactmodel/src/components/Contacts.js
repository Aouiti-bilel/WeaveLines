import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class Contacts extends Component {
  render() {
    const { contacts } = this.props.auth;
    const { errors } = this.props;

    let contactsContent;
    if (Object.keys(this.props.auth).length > 0) {
      contactsContent = contacts.map(exp => (
        <tr key={exp.id}>
          <td>{exp.name}</td>
          <td>{exp.email}</td>
        </tr>
      ));
    } else {
      contactsContent = <div className="alert alert-danger">{errors}</div>;
    }
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="mb-4">Liste Of Contacts</h4>

              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>

                    <th />
                  </tr>
                  {contactsContent}
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
connect.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps)(Contacts);
