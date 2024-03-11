import React, { useState } from "react";
import logoHelper from "../assets/logo-helper.svg";
import {
  Card,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Snackbar,
  Alert,
  Slide,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    setTimeout(()=>{
        Navigate('/Dashboard')
    },2000)
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
    <Snackbar TransitionComponent={Slide} anchorOrigin={{vertical:"bottom",horizontal:"center"}} open={open} autoHideDuration={6000} onClose={handleClose}>
    <Alert
          severity="success"
          variant="standard"
          sx={{ width: '100%' }}
        >
          Verified Successfully
        </Alert>
    </Snackbar>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center pt-4">
            <div className="d-flex flex-column align-items-center gap-3 justify-content-center ">
              <img src={logoHelper} alt="logo-helper" />
              <h3 className="mb-0">Rural Development Department</h3>
            </div>
          </div>

          <div className="col-12 pt-4 d-flex justify-content-center">
            <Card
              className="p-3 px-4 pb-4"
              sx={{
                width: "500px",
                border: "1px solid #E0E4F0",
                borderRadius: "20px",
              }}
            >
              <h2 className="text-center" style={{ fontWeight: 600 }}>
                Login.
              </h2>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                className={` ${error ? "mt-2" : "mt-3"} w-100`}
                size="small"
                error={error}
                helperText={error ? "Username not found." : ""}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="outlined"
                className={` ${error ? "mt-2" : "mt-3"} w-100`}
                size="small"
                error={error}
                helperText={error ? "Invalid Password." : ""}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button onClick={handleClick} variant="contained" className={` ${error ? "mt-2" : "mt-3"} w-100 py-2`} >Continue</Button>
            </Card>

          </div>
          <div className="col-12 mt-4" > 
            <p className="text-center" style={{color:"#586374"}} >© Rural Development Department 2024. All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
