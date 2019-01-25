import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import ModalBody from "./modalBody";

class NewAdminForm extends Component {
  state = {
    admin: {
      role: "Product 1"
    }
  };

  valueChanged = ({ currentTarget: input }) => {
    const data = { ...this.state.admin };
    data[input.name] = input.value;
    this.setState({ admin: data });
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
            onSubmit={() => this.props.onSubmit(this.state.admin)}
          />
        </Modal>
      </div>
    );
  }
}

export default NewAdminForm;
