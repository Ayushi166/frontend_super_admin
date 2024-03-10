import { Avatar } from "@mui/joy";
import React from "react";

const Header = (props) => {
  return (
    <>
      <div
        className="container sticky-top bg-white"
        style={{ borderBottom: "1px solid #E8E8E8" }}
      >
        <div className="row p-0">
          <div className="col-12 py-3 px-3 d-flex justify-content-between align-items-center">
            <h3 className="mb-0 " style={{ color: "#1A2433" }}>
              {props.heading}
            </h3>
                <Avatar
                  size="lg"
                  variant="outlined"
                  src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=600"
                  sx={{ cursor: "pointer" }}
                />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
