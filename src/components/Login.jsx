import React, { useState } from "react";
import logoHelper from "../assets/logo-helper.svg";
import "../assets/style.css";
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

    <div class="container-fluid vh-100 overflow-auto">
      <div class="row vh-100 ">
      <div class="col-lg-6 bg-gray p-5 text-center">

      <div class="img-cover p-4">
                    <img src={"public/JK_logo.png"} />
                    </div>

                   <h4 class="text-center fw-bolder">Government of Jammu and Kashmir</h4>
                   <p class="mb-3 fs-7 sub-title">Department of Rural Development and Panchayati Raj</p>
                   
                   
                </div>


                <div class="col-lg-6 p  vh-100">
                   <div class="row d-flex vh-100">
                   <div class="col-md-8 p-4 ikigui m-auto text-center align-items-center">
                   <div class="p-3 px-4 pb-4 ikigui m-auto text-center align-items-center">
              <h2 className="text-center" style={{ fontWeight: 600 }}>
                Welcome Back!
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
            </div>
                   
                   </div>
</div>
            </div>

      </div>
    </div>



      <div className="container">
        






      
        
      </div>
    </>
  );
};

export default Login;
