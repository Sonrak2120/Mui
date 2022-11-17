import React from "react";
import { Box } from "@mui/material";
import logo from "../../pic/logo.png";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "../../App.css";

function login() {
  return (
    <div className="PageBackground">
      <Stack justifyContent="center" alignItems={"center"}>
        <Box
          component="img"
          src={logo}
          sx={{ maxWidth: "200px", mt: "5rem" }}
        ></Box>
        <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
          เข้าสู่ระบบ Administrator
        </Typography>
        <TextField
          sx={{
            "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              "border-color": "black",
            },
            mt: "20px",
            width: "450px",
          }}
          label="Username"
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          sx={{
            "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              "border-color": "black",
            },
            mt: "10px",
            width: "450px",
          }}
          label="Password"
          id="outlined-basic"
          variant="outlined"
        />
        <Button variant="contained" disableElevation sx={{ mt: "20px" }}>
          เข้าสู่ระบบ
        </Button>
        <Button>ลืมรหัสผ่าน</Button>
      </Stack>
    </div>
  );
}

export default login;
