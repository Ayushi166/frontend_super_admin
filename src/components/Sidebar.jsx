import React from "react";
import logoHelper from "../assets/logo-helper.svg";
import { MdOutlineCategory } from "react-icons/md";
import { RiHome6Fill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const Navigate = useNavigate();
  const location = useLocation();

  const data = [
    {
      icon: <RiHome6Fill />,
      value: "Dashboard",
      pathname: "/Dashboard",
    },
    {
      icon: <MdOutlineCategory />,
      value: "Categories",
      pathname: "/Categories"
    },
  ];

  return (
    <>
      <div className="p-0 d-flex align-items-center gap-1 justify-content-center py-3">
        <img src={logoHelper} alt="logo-helper" />
        <h3 className="mb-0">SuperAdmin</h3>
      </div>

      {/* <div className="d-flex flex-column gap-3"> */}
      <div className="container">
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
                          ? "#E0ECFF"
                          : "transparent",
                      border:
                        location.pathname === data.pathname
                          ? "0.5px solid #3490F6"
                          : "none",
                      borderRadius: "12px",
                      cursor: "pointer",
                      color:
                        location.pathname === data.pathname
                          ? "#0068B9"
                          : "#1A2433",
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
      {/* </div> */}
    </>
  );
};

export default Sidebar;