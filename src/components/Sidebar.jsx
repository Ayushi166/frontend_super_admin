import React from "react";
import logoHelper from "../assets/logo-helper.svg";
import { HiUsers } from "react-icons/hi2";
import { RiHome6Fill } from "react-icons/ri";
import { TbHandStop } from "react-icons/tb";
import { IoNewspaper } from "react-icons/io5";
import { BiLogOutCircle } from "react-icons/bi";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../env";

const Sidebar = () => {
  const Navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = React.useState(false);

  const logoutApi = async () => {
    setOpen(false);
    try {
      const myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        `Bearer ${localStorage.getItem("token")}`
      );

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        redirect: "follow",
      };

    const response = await fetch(`${BASE_URL}/admin/logout`, requestOptions)
    const result = await response.json();
    if(result.status==="001"){
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      setOpen(true);
      setTimeout(() => {
        Navigate("/");
      }, 1000);
    }
    } catch (e) {
      console.log(e);
    }
  };



  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const data = [
    {
      icon: <RiHome6Fill />,
      value: "Dashboard",
      pathname: "/Dashboard",
    },
    {
      icon: <HiUsers />,
      value: "Users",
      pathname: "/Users",
    },
    {
      icon: <TbHandStop />,
      value: "Grievances",
      pathname: "/Grievances",
    },
    {
      icon: <IoNewspaper />,
      value: "Work",
      pathname: "/Work",
    }
    // {
    //   icon: <IoNewspaper />,
    //   value: "Add New Official",
    //   pathname: "/users/Add_New",
    // },
  ];

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
          Logout successfull
        </Alert>
      </Snackbar>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <div className="p-0 d-flex align-items-center gap-1 justify-content-center py-3">
          <img src={logoHelper} alt="logo-helper" />
          {/* <h3 className="mb-0">SuperAdmin</h3> */}
        </div>

        <div className="container" style={{ flex: 1 }}>
          <div className="row">
            <div className="col-12 pt-3">
              {data.map((data, value) => {
                return (
                  <>
                    <div
                      onClick={() => Navigate(data.pathname)}
                      key={value}
                      className="d-flex align-items-center py-2 justify-content-start ps-3 gap-2 mb-3"
                      style={{
                        fontFamily: "Inter",
                        fontSize: "1rem",
                        background:
                          location.pathname === data.pathname
                            ? "#027399"
                            : "transparent",
                        borderRadius: "12px",
                        cursor: "pointer",
                        color:
                          location.pathname === data.pathname
                            ? "#fff"
                            : "#9197B3",
                      }}
                    >
                      <span>{data.icon}</span>
                      <span>{data.value}</span>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="d-flex align-items-center py-2 mx-3  justify-content-center gap-2 mb-3"
          style={{
            background: "#FFEFEF",
            color: "#FF2525",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={logoutApi}
        >
          <span>
            <BiLogOutCircle />
          </span>
          <span className="logout">LogOut</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
