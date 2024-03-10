import React from "react";
import Header from "../Header";
import { Divider } from "@mui/joy";

const Dashboard = () => {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header heading="Welcome to SuperAdmin!" />
        <div className="container h-100 pt-3" style={{ flex: 1 }}>
          <div className="row h-100">
            <div className='col-lg-3' >
              <div className="card p-3 pb-0" >
                <h3>Work Submitted</h3>
                <div className="d-flex align-items-center gap-3" >

                <div>
                <p>Completed</p>
    <p>0</p>
                </div>
                <Divider/>
                <div>
                <p>In Progress</p>
    <p>0</p>
                </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3' >
              <div className="card p-3 pb-0" >
                <h3>Users</h3>
              <div className="d-flex align-items-center gap-3" >

                <div>
                <p>Official</p>
    <p>0</p>
                </div>
                <Divider/>
                <div>
                <p>Citizen</p>
    <p>0</p>
                </div>
              </div>
              </div>
            </div>
            <div className='col-lg-3' >
              <div className="card p-3 pb-0" >
                <h3>Comlaints</h3>
                <div className="d-flex align-items-center gap-3" >
                <div>
                <p>Pending</p>
    <p>0</p>
                </div>
                <Divider/>
                <div>
                <p>Closed</p>
    <p>0</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
