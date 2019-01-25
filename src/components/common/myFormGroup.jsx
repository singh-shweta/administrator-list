import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
const MyFormGroup = ({ id, title, type, onChange, data, name }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{title}</ControlLabel>
      <FormControl
        type={type}
        onChange={onChange}
        value={data[id]}
        name={name}
      />
      <FormControl.Feedback />
    </FormGroup>
  );
};

export default MyFormGroup;
