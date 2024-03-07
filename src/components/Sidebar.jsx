import React from "react";
import logoHelper from "../assets/logo-helper.svg";
import { MdSpaceDashboard } from "react-icons/md";


const Sidebar = () => {
  const data = [
    {
      icon: <MdSpaceDashboard/>,
      value: "Dashboard",
    },
    {
      icon: <MdSpaceDashboard/>,
      value: "Dashboard",
    },
    {
      icon: <MdSpaceDashboard/>,
      value: "Dashboard",
    },
    {
      icon: <MdSpaceDashboard/>,
      value: "Dashboard",
    },
  ];

  return (
    <>
      <div
        className="p-0 d-flex align-items-center gap-1 justify-content-center py-3"
        style={{ border: "1px solid black" }}
      >
        <img src={logoHelper} alt="logo-helper" />
        <h3 className="mb-0">SuperAdmin</h3>
      </div>

      <div className="d-flex flex-column gap-3">
        <div className="container">
          <div className="row">
            {data.map((data, value) => {
              return (
                <>
                <div className="col-2 text-end" >{data.icon}</div>
                  <div className="col-10">{data.value}</div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
