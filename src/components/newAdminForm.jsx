import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import ModalBody from "./modalBody";

class NewAdminForm extends Component {
  constructor(props) {
    super(props);
    const adminObj = {
      role: "Product"
    };
    this.state = {
      admin: props.activeAdmin
        ? Object.keys(props.activeAdmin).length
          ? props.activeAdmin
          : adminObj
        : adminObj,
      errors: {}
    };
  }

  validateEmail = (data, value) => {
    if (
      value &&
      !new RegExp(
        /^([a-zA-Z0-9_+.\-'])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/
      ).test(value)
    ) {
      data.errors["email"] = "Invalid Email";
    } else {
      delete data.errors["email"];
    }
  };

  validateValue = ({ currentTarget: input }) => {
    const data = { ...this.state };
    const value = data.admin[input.name];
    if (input.name === "email") {
      this.validateEmail(data, value);
    }
    if (input.name === "adminName") {
      this.validateName(data, value);
    }
    this.setState({ errors: data.errors });
  };

  validateName = (data, value) => {
    if (value.length > 255) {
      data.errors["adminName"] =
        "Invalid Name(length must be less than 255 characters";
    } else {
      delete data.errors["adminName"];
    }
  };

  valueChanged = ({ currentTarget: input }) => {
    const data = { ...this.state.admin };
    data[input.name] = input.value;
    this.setState({ admin: data });
  };

  handingOverToSubmit = () => {
    const data = { ...this.state };
    console.log(data);
    if (!data.admin.adminName) {
      data.errors.adminName = "Name Required";
    }

    if (!data.admin.email) {
      data.errors.email = "Email Required";
    }
    this.setState({
      errors: data.errors
    });

    console.log(this.state);

    if (!Object.keys(data.errors).length) {
      this.props.onSubmit(data.admin);
    }
  };

  render() {
    return (
      <div>
        <Modal
          show={this.props.showModal}
          onHide={this.props.onHide}
          bsSize="large"
        >
          <Modal.Header closeButton>
            <Modal.Title>Create New Administrator</Modal.Title>
          </Modal.Header>
          <ModalBody
            onChange={this.valueChanged}
            data={this.state.admin}
            errors={this.state.errors}
            onSubmit={this.handingOverToSubmit}
            onBlur={this.validateValue}
          />
        </Modal>
      </div>
    );
  }
}

export default NewAdminForm;
