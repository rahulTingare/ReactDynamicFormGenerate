import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
  Divider,
  Grid,
} from "@mui/material";
import { ImCross } from "react-icons/im";

const ModalPreview = ({ closeModalHandler, initialFields }) => {
  const [finalGeneratedForm, setFinalGeneratedForm] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(Array(initialFields.length).fill(""));

  useEffect(() => {
    const generatedForm = [
      {
        formId: "dynamicForm",
        formName: localStorage.getItem("formName") || "Untitled Form",
        fields: [...initialFields],
      },
    ];
    setFinalGeneratedForm(generatedForm);
  }, [initialFields]);

  const handleFinalFormSubmit = (e) => {
    e.preventDefault();
    console.log(finalGeneratedForm);
  };

  const handleSelectChange = (e, index) => {
    const selectedOption = e.target.value;
    setSelectedOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index] = selectedOption;
      return updatedOptions;
    });
  };

  return (
    <Grid
      container
      className="modal-preview-container"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12} container justifyContent="end" alignItems="center">
        <Button variant="text" onClick={closeModalHandler}>
          <ImCross />
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Divider className="divider" />
      </Grid>
      <Grid item xs={12} md={6} className="form-container">
        <form onSubmit={handleFinalFormSubmit}>
          {initialFields.length > 0 ? (
            initialFields.map((field, index) => (
              <div key={index} className={`final-field ${field.type}`}>
                <div className="field-header">
                  <label htmlFor="">
                    <h4>{field.name}</h4>
                  </label>
                </div>
                {field.inputType === "input" && (
                  <TextField
                    className="form-textfield"
                    placeholder={field.placeholder}
                    defaultValue={field.defaultValue}
                    name={`input${index}`}
                    type={field.type}
                  />
                )}
                {field.inputType === "select" && (
                  <Select
                    className="form-select"
                    placeholder="Select Options"
                    value={selectedOptions[index]}
                    onChange={(e) => handleSelectChange(e, index)}
                  >
                    {Array.isArray(field.option) &&
                      field.option.map((option, optionIndex) => (
                        <MenuItem key={optionIndex} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                  </Select>
                )}
                {field.inputType === "textarea" && (
                  <TextField
                    className="form-textarea"
                    placeholder={field.placeholder}
                    multiline
                  />
                )}
              </div>
            ))
          ) : (
            <div className="no-fields">No fields added yet</div>
          )}
          {initialFields.length > 0 && (
            <>
              <Divider className="divider" />
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                pt={3}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className="save-button"
                  type="submit"
                >
                  SAVE
                </Button>
              </Grid>
            </>
          )}
        </form>
      </Grid>
    </Grid>
  );
};

export default ModalPreview;
