import React from "react";

const Header = (props) => {
  return (
    <>
      <div className="container sticky-top" style={{borderBottom:"2px solid #E8E8E9"}} >
        <div className="row p-0">
          <div className="col-12 py-3">
            <h3 className="mb-0 px-3" style={{color:"#1A2433"}} >{props.heading}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
