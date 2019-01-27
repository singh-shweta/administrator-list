import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import AdminTable from "./common/adminTable";
import CounterBar from "./counterBar";
import {
  populateAdmins,
  showAdminModal,
  hideAdminModal,
  addNewAdmin,
  setActiveAdmin
} from "../js/actions/index";
import NewAdminForm from "./newAdminForm";

class AdministratorsComponent extends Component {
  columns = [
    {
      id: "adminName",
      label: "Name",
      content: item => (
        <p onClick={() => this.editLink(item)}>{item.adminName}</p>
      )
    },
    {
      id: "email",
      label: "Email"
    },
    {
      id: "role",
      label: "Role"
    },
    {
      id: "lastLogin",
      label: "Last Login"
    }
  ];
  componentDidMount() {
    this.props.getAdmins();
  }

  handleSaveAdmin = newAdmin => {
    this.props.addAdmin(newAdmin);
  };

  editLink = admin => {
    this.props.setActiveAdmin(admin);
  };

  renderPage() {
    const { isLoading, admins } = this.props;
    if (isLoading) {
      return (
        <center>
          <Loader type="ThreeDots" color="#A9A9A9" height="100" width="100" />
        </center>
      );
    }
    return (
      <div>
        <CounterBar count={admins.length} addNewAdmin={this.handleNewAdmin} />
        {this.props.showModal && (
          <NewAdminForm
            showModal={this.props.showModal}
            onHide={this.handleCloseModal}
            onSubmit={this.handleSaveAdmin}
            activeAdmin={this.props.activeAdmin}
          />
        )}
        <AdminTable admins={admins} columns={this.columns} />
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
    showModal: state.showModal,
    activeAdmin: state.activeAdmin
  };
};

const Administrators = connect(
  mapStateToProps,
  {
    getAdmins: populateAdmins,
    showAdminModal,
    hideAdminModal,
    addAdmin: addNewAdmin,
    setActiveAdmin
  }
)(AdministratorsComponent);

export default Administrators;
