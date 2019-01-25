import React, { Component } from "react";
import AdminTable from "./adminTable";
import CounterBar from "./counterBar";
import { connect } from "react-redux";
import {
  populateAdmins,
  showAdminModal,
  hideAdminModal,
  addNewAdmin
} from "../js/actions/index";
import NewAdminForm from "./newAdminForm";

class AdministratorsComponent extends Component {
  newAdmin = {
    name: null,
    email: null,
    role: null
  };
  componentDidMount() {
    this.props.getAdmins();
  }

  handleSaveAdmin = newAdmin => {
    this.props.addAdmin(newAdmin);
  };

  renderPage() {
    const { isLoading, admins } = this.props;
    if (isLoading) {
      return <p>Loading.........</p>;
    }
    return (
      <div>
        <CounterBar count={admins.length} addNewAdmin={this.handleNewAdmin} />
        <NewAdminForm
          showModal={this.props.showModal}
          onHide={this.handleCloseModal}
          onSubmit={this.handleSaveAdmin}
        />
        <AdminTable admins={admins} />
      </div>
    );
  }

  handleNewAdmin = () => {
    this.props.showAdminModal();
  };

  handleCloseModal = () => {
    this.props.hideAdminModal();
  };

  render() {
    return <React.Fragment>{this.renderPage()}</React.Fragment>;
  }
}
const mapStateToProps = state => {
  return {
    admins: state.admins,
    isLoading: state.isLoading,
    showModal: state.showModal
  };
};

const Administrators = connect(
  mapStateToProps,
  {
    getAdmins: populateAdmins,
    showAdminModal,
    hideAdminModal,
    addAdmin: addNewAdmin
  }
)(AdministratorsComponent);

export default Administrators;
