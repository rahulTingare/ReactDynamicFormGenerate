import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { TiTick } from "react-icons/ti";

const EditFormField = ({ field, index, labelOnsubmitHandler, title, defaultValue }) => {

  // Convert options to an array if it's not already an array
  const initialOptions = Array.isArray(field.options) ? field.options : [field.options];
  const [options, setOptions] = useState(initialOptions);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "Change Label") {
      labelOnsubmitHandler(e, index, "name");
    } else if (title === "Change Placeholder") {
      labelOnsubmitHandler(e, index, "placeholder");
    } else {
      labelOnsubmitHandler(e, index, "options");
      field.option=options;
    }
  };

  const handleOptionChange = (e, optionIndex, field) => {
    const newOptions = [...options];
    newOptions[optionIndex][field] = e.target.value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, { label: "", value: "" }]);
  };

  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <Box display="flex" justifyContent="flex-start" gap={2} alignItems="center">
            {title !== "Add Option" && (
              <TextField
                label={title}
                variant="outlined"
                name={title === "Change Label" ? `label${index}` : `placeholder${index}`}
                id={title === "Change Label" ? `label${index}` : `placeholder${index}`}
                defaultValue={title === "Change Label" ? field.name : field.placeholder}
              />
            )}
            {title === "Add Option" && (
              <Box>
                {options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <TextField
                      label={`Option ${optionIndex + 1}`}
                      variant="outlined"
                      value={option.label}
                      onChange={(e) => handleOptionChange(e, optionIndex, "label")}
                    />
                    <TextField
                      label={`Value ${optionIndex + 1}`}
                      variant="outlined"
                      value={option.value}
                      onChange={(e) => handleOptionChange(e, optionIndex, "value")}
                    />
                  </div>
                ))}
                <Button onClick={addOption}>Add Option</Button>
              </Box>
            )}
            <Button type="submit" variant="contained" color="success">
              <TiTick />
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default EditFormField;
