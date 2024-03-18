import { Avatar } from "@mui/joy";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MdMenuOpen } from "react-icons/md";
import { Offcanvas } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { RiHome6Fill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi2";
import { TbHandStop } from "react-icons/tb";
import { IoNewspaper } from "react-icons/io5";
import { BiLogOutCircle } from "react-icons/bi";
import logoHelper from "../assets/logo-helper.svg";

const Header = (props) => {
  const Navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    setTimeout(()=>{
        Navigate('/')
    },2000)
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
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
      icon: <HiUsers  />,
      value: "Users",
      pathname: "/Users"
    },
    {
      icon: <TbHandStop   />,
      value: "Grievances",
      pathname: "/Grievances"
    },
    {
      icon: <IoNewspaper   />,
      value: "Work",
      pathname: "/Work"
    },
  ];
  const isMobileOrTablet = useMediaQuery({
    query: '(max-width: 968px)'
  })
  const [show, setShow] = useState(false);

  const handleClose1 = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div
        className="container-fluid sticky-top"
        style={{ borderBottom: "1px solid #E8E8E8",background:"#027399" }}
      >
        <div className="row p-0">
          <div className="col-12 py-3 px-3 d-flex justify-content-between align-items-center">
          {
            isMobileOrTablet?(
            <p className="mb-0 " style={{ color: "#fff",fontFamily:"Poppins" }}>
              {props.heading}
            </p>

            ):(
            <h3 className="mb-0 head-title" style={{ color: "#fff",fontFamily:"Poppins" }}>
              {props.heading}
            </h3>
            )
          }

          {
            isMobileOrTablet?(
              <MdMenuOpen className="text-white" style={{fontSize:"1.5rem"}} onClick={handleShow}  />
            ):(
                <Avatar
                  size="lg"
                  variant="outlined"
                  src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=600"
                  sx={{ cursor: "pointer" }}
                />
            )
          }
          </div>
        </div>
      </div>


      <Offcanvas show={show} placement="top" style={{height:"100vh"}} onHide={handleClose1}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Rural Development Department</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div style={{display:"flex",flexDirection:"column",height:"80vh"}} >
      <div className="p-0 d-flex align-items-center gap-1 justify-content-center py-2">
        <img src={logoHelper} alt="logo-helper" />
        {/* <h3 className="mb-0">SuperAdmin</h3> */}
      </div>

      <div className="container" style={{flex:1}} >
        <div className="row">
          <div className="col-12 pt-3">
            {data.map((data, value) => {
              return (
                <>
                  <div
                    onClick={()=>Navigate(data.pathname)}
                    key={value}
                    className="d-flex align-items-center py-2 justify-content-start ps-3 gap-2 mb-3"
                    style={{
                      fontFamily: "Inter",
                      fontSize: "1.1rem",
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
      <div className="d-flex align-items-center py-2 mx-3  justify-content-center gap-2 mb-3" style={{background:"#FFEFEF",color:"#FF2525",borderRadius:"10px",cursor:"pointer"}} onClick={handleClick}  >
            <span><BiLogOutCircle /></span>
            <span>LogOut</span>
      </div>
      </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
