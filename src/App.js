import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div>
      <h1>Sonrak Mannok</h1>
      <Button variant="contained" color="success">
        hello
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>


      <TextField sx={{"& .MuiOutlinedInput-root": {'& fieldset': {borderColor:"red"}}}} label="Outlined" variant="outlined" />


      <Box sx={{bgcolor:"green"}}>
        <Typography variant="h4">
          Heading
        </Typography>
      </Box>
    </div>
  );
}

export default App;
