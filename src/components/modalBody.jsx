import React from "react";
import { FormGroup, ControlLabel, Modal, Radio, Button } from "react-bootstrap";
import MyFormGroup from "./common/myFormGroup";

const ModalBody = props => {
  return (
    <Modal.Body>
      <MyFormGroup
        title="Name"
        type="text"
        id="name"
        name="adminName"
        onChange={props.onChange}
        data={props.data}
      />
      <MyFormGroup
        title="Email"
        type="email"
        id="email"
        name="email"
        onChange={props.onChange}
        data={props.data}
      />
      <FormGroup controlId="adminRole">
        <ControlLabel>Administrator Role</ControlLabel>
        <Radio
          name="role"
          value="Product 1"
          checked={props.data.role === "Product 1"}
          onChange={props.onChange}
        >
          Product 1 Administrator
        </Radio>
        <Radio
          name="role"
          inline
          value="Product 2"
          checked={props.data.role === "Product 2"}
          onChange={props.onChange}
        >
          Product 2 Administrator
        </Radio>
      </FormGroup>
      <Modal.Footer>
        <Button type="submit" bsStyle="primary" onClick={props.onSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal.Body>
  );
};

export default ModalBody;
