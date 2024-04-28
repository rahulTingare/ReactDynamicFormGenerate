// Toolbar.js
import React from "react";
import { Button, Divider, Typography, Card, Box } from "@mui/material";
import { GrDrag } from "react-icons/gr";
import { TbSelect, TbSortAscendingNumbers } from "react-icons/tb";
import { BiText } from "react-icons/bi";
import { BsTextareaT } from "react-icons/bs";

const Toolbar = ({ initialFields, setInitialFields }) => {
  const items = [
    {
      id: 1,
      label: "Default Label",
      name: "Text Input",
      icon: <BiText />,
      inputType: "input",
      type: "text",
      // defaultValue: 0,
      value: "",
      placeholder: "Enter text",
      required: false,
      options: [],
    },
    {
      id: 2,
      label: "Default Label",
      name: "Number Input",
      icon: <TbSortAscendingNumbers />,
      inputType: "input",
      type: "number",
      defaultValue: "hello world",
      value: "",
      placeholder: "Enter The Number",
      required: false,
      options: [],
    },
    {
      id: 3,
      label: "Default Label",
      name: "Select",
      icon: <TbSelect />,
      inputType: "select",
      type: "select",
      defaultValue: "",
      value: "",
      placeholder: "Enter Option",
      required: false,
      options: [],
    },
    {
      id: 4,
      label: "Default Label",
      name: "Text Area",
      icon: <BsTextareaT />,
      inputType: "textarea",
      type: "textarea",
      defaultValue: "",
      value: "",
      placeholder: "Enter Your Message",
      required: false,
      options: [],
    },
  ];

  const itemClickHandler = (item) => {
    // Ensure that options are passed when adding a new item of type "select"
    const newItem = { ...item, options: item.inputType === "select" ? [] : undefined };
    setInitialFields([...initialFields, newItem]);
  };

  return (
    <Box p={4}>
      <Card className="toolbar__card">
        <Typography variant="h6" gutterBottom>
          Fields
        </Typography>
        <Divider />
        <div>
          {items.map((item, index) => (
            <Button
              key={index}
              onClick={() => itemClickHandler(item)}
              variant="outlined"
              sx={{ width: "100%", marginBottom: "1rem" }}
            >
              <div>
                <div className="icon">{item.icon}</div>
                <div>
                  <Typography variant="subtitle1">{item.name}</Typography>
                </div>
              </div>
              <div className="drag">
                <GrDrag />
              </div>
            </Button>
          ))}
        </div>
      </Card>
    </Box>
  );
};

export default Toolbar;