import React from "react";
import { FormGroup, ControlLabel, Modal, Radio, Button } from "react-bootstrap";
import MyFormGroup from "./common/myFormGroup";

const ModalBody = props => {
  return (
    <Modal.Body>
      <MyFormGroup
        title="Name"
        type="text"
        id="adminName"
        name="adminName"
        onChange={props.onChange}
        data={props.data}
        onBlur={props.onBlur}
        errors={props.errors}
      />
      <MyFormGroup
        title="Email"
        type="email"
        id="email"
        name="email"
        onChange={props.onChange}
        data={props.data}
        onBlur={props.onBlur}
        errors={props.errors}
      />
      <FormGroup controlId="adminRole">
        <ControlLabel>Administrator Role</ControlLabel>
        <Radio
          name="role"
          value="Druva Cloud"
          checked={props.data.role === "Druva Cloud"}
          onChange={props.onChange}
        >
          Druva Cloud Administrator
        </Radio>
        <Radio
          name="role"
          inline
          value="Product"
          checked={props.data.role === "Product"}
          onChange={props.onChange}
        >
          Product Administrator
        </Radio>
      </FormGroup>
      <Modal.Footer>
        <Button type="submit" bsStyle="primary" onClick={props.onSubmit}>
          Save
        </Button>
        <Button type="submit" bsStyle="secondary" onClick={props.onDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal.Body>
  );
};

export default ModalBody;
