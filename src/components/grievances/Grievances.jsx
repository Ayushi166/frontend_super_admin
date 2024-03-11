import React from "react";
import Header from "../Header";

const Grievances = () => {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header heading="Welcome to Rural Development Department" />
        <div className="container h-100 pt-3" style={{ flex: 1 }}>
          <div className="row h-100">
            <div className="col-12 m-auto">
              <h3 className="text-danger text-center">
                Currently No Data Found
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grievances;
