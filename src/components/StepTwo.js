import React from "react";
import TextField from "@material-ui/core/TextField";

const StepTwo = ({ name, onNameChange }) => {
  return (
    <form autoComplete="off">
      <TextField
        error={!name}
        id="outlined-error-helper-text"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        label="Name"
        helperText={!name && "Enter name of Widget"}
        variant="outlined"
        style={{ width: "50%" }}
      />
    </form>
  );
};

export default StepTwo;
