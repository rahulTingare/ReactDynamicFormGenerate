import React from "react";
import { Box, Card, Button, Grid } from "@mui/material";
import { AiFillDelete } from "react-icons/ai";
import EditFormField from "./EditFormField";

const DndHolder = ({ initialFields, setInitialFields }) => {
  const deleteItemHandler = (index) => {
    const newInitialFields = initialFields.filter((item, i) => i !== index);
    setInitialFields(newInitialFields);
  };

  const labelOnsubmitHandler = (e, index, type) => {
    e.preventDefault();
    const newInitialFields = [...initialFields];
    const newValue = e.target[0].value;
    newInitialFields[index][type] = newValue;
    setInitialFields(newInitialFields);
  };

  return (
    <Box className="text-start dnd-holder" p={4}>
      <Card className="toolbar__card">
        <Box>
          {initialFields.map((field, index) => (
            <Box key={index} className="field">
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={8} md={8} lg={8}>
                    <EditFormField
                      field={field}
                      labelOnsubmitHandler={labelOnsubmitHandler}
                      title="Change Label"
                      index={index}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8} md={1} lg={1}>
                    <Box className="actions">
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ width: "100%" }}
                        onClick={() => deleteItemHandler(index)}
                      >
                        <AiFillDelete />
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ marginTop: "1rem" }}>
                {field.inputType === "input" && (
                  <EditFormField
                    field={field}
                    labelOnsubmitHandler={labelOnsubmitHandler}
                    title="Change Placeholder"
                    index={index}
                  />
                )}
                {field.inputType === "select" && (
                  <EditFormField
                    field={field}
                    labelOnsubmitHandler={labelOnsubmitHandler}
                    title="Add Option"
                    index={index}
                  />
                )}
                {field.inputType === "textarea" && (
                  <EditFormField
                    field={field}
                    labelOnsubmitHandler={labelOnsubmitHandler}
                    title="Change Placeholder"
                    index={index}
                  />
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Card>
    </Box>
  );
};

export default DndHolder;
