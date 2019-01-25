import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
const MyFormGroup = ({
  id,
  title,
  type,
  onChange,
  data,
  name,
  onBlur,
  errors
}) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{title}</ControlLabel>
      <FormControl
        type={type}
        onChange={onChange}
        value={data[id]}
        onBlur={onBlur}
        name={name}
      />
      {errors && errors[name] ? (
        <div className="alert alert-danger">{errors[name]}</div>
      ) : null}
    </FormGroup>
  );
};

export default MyFormGroup;
