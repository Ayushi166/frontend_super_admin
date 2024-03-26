import React, { useState } from "react";
import JK from "../assets/JK_logo.png";
import "../assets/style.css";
import {
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
import { useMediaQuery } from "react-responsive";
import { BASE_URL } from "../env";

const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading,setLoading] = useState(false);
  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 968px)",
  });

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  

  const loginApi = async () => {
    setLoading(true);
    setEmailError(false);
    setPassError(false);
    setOpen(false);
    setOpen1(false);
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        username: email,
        password: password
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

     const response = await fetch(`${BASE_URL}/admin/login`, requestOptions)
        const result = await response.json();
        if(result.status==="001"){
          localStorage.setItem("token",result.token);
          localStorage.setItem("name",result.name);
          setOpen(true);
          setTimeout(() => {
            Navigate("/Dashboard");
          }, 1000);
        } else if(result.status==="003"){
          if(result.message==="Username is not Registered"){
            setEmailError(true);
          }else if(result.message==="Incorrect password"){
            setPassError(true)
          } else if(result.status==="VAL_ERR"){
            setOpen1(true)
          }
        }
    } catch (e) {
      console.log(e);
    }
    finally{
      setLoading(false);
    }
  };


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClose1  = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen1(false);
  };

  return (
    <>
      <Snackbar
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity="success" variant="standard" sx={{ width: "100%" }}>
          Verified Successfully
        </Alert>
      </Snackbar>
      <Snackbar
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open1}
        autoHideDuration={6000}
        onClose={handleClose1}
      >
        <Alert severity="error" variant="standard" sx={{ width: "100%" }}>
          Pls fill out all fields
        </Alert>
      </Snackbar>

      <div class="container-fluid vh-100 overflow-auto">
        <div class="row vh-100 ">
          <div
            class={` ${
              isMobileOrTablet ? "d-none" : "col-6"
            } bg-gray p-5 text-center d-flex flex-column justify-content-center`}
          >
            <div class="img-cover p-4">
              <img src={JK} alt="h" style={{ maxHeight: "200px" }} />
            </div>

            <h4 class="text-center fw-bolder">
              Government of Jammu and Kashmir
            </h4>
            <p class="mb-3 fs-7 sub-title">
              Department of Rural Development and Panchayati Raj
            </p>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-12 p  vh-100">
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
                    className={` ${emailError ? "mt-2" : "mt-3"} w-100`}
                    size="small"
                    error={emailError}
                    helperText={emailError ? "Username not found." : ""}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic1"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    variant="outlined"
                    className={` ${passError ? "mt-2" : "mt-3"} w-100`}
                    size="small"
                    error={passError}
                    helperText={passError ? "Invalid Password." : ""}
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

                  <Button
                    onClick={()=>{
                      if(email<=0||password<=0){
                        setOpen1(true);
                      }else{
                        loginApi();
                      }
                    }}
                    variant="contained"
                    className={` ${emailError || passError ? "mt-2" : "mt-3"} w-100 py-2`}
                    disabled={loading?true:false}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container"></div>
    </>
  );
};

export default Login;
