import React, { useState } from "react";
import { Button, Typography, Box, Grid, Modal } from "@mui/material";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import ModalPreview from "./Pages/ModalPreview";
import DndHolder from "./Pages/DndHolder";
import Toolbar from "./Pages/Toolbar";
import "./App.css";
function App() {
  const [initialFields, setInitialFields] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [preview, setPreview] = useState(false);

  const previewHandler = () => {
    setModalVisible(!modalVisible);
    setPreview(!preview);
  };

  return (
    <Box>
      <Box
        p={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <div>
          <Typography variant="h5" color="primary" gutterBottom>
            Form
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Create & Manage Form
          </Typography>
        </div>
        <Box display="flex" gap={2} alignItems="center">
          <Button
            variant="outlined"
            size="large"
            color="primary"
            sx={{ padding: "0.8rem" }}
            onClick={previewHandler}
          >
            {preview ? <BsEyeSlash /> : <BsEye />}
          </Button>
          <Button variant="contained" color="primary" size="large">
            Generate
          </Button>
        </Box>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <Toolbar
            initialFields={initialFields}
            setInitialFields={setInitialFields}
            modalVisible={modalVisible}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={9} lg={9}>
          <DndHolder
            initialFields={initialFields}
            setInitialFields={setInitialFields}
            setModalVisible={setModalVisible}
          />
        </Grid>
      </Grid>
      {modalVisible && (
       <Grid container sx={{justifyContent:"center"}}>
             <Grid item xs={12} sm={6} md={6} lg={6}>
           <Modal
          open={modalVisible}
          onClose={previewHandler}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalPreview
            closeModalHandler={previewHandler}
            initialFields={initialFields}
          />
        </Modal>
        </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default App;
