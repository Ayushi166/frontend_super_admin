import React from "react";
import Header from "../Header";
import { Divider } from "@mui/joy";

const Dashboard = () => {
  return (
    <>
      {/* <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      > */}
        <Header heading="Welcome to SuperAdmin!" />
        <div className="container h-100 pt-3">
          <div className="row" style={{rowGap:"1rem"}} >
            <div className='col-lg-4' >
              <div className="card p-3 pb-0" >
                <h3>Work Submitted</h3>
                <hr/>
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
            <div className='col-lg-4' >
              <div className="card p-3 pb-0" >
                <h3>Users</h3>
                <hr/>
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
            <div className='col-lg-4' >
              <div className="card p-3 pb-0" >
                <h3>Complaints</h3>
                <hr/>
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
            <div className="col-lg-6" >
              <h2>Citizen Work</h2>
              <table className="w-100 text-center" >
                <thead >
                  <tr>
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Status</th>
                  </tr>
                </thead>
                <tbody className="w-100" style={{height:"200px"}} >
                  <h4 className="text-center text-danger" >No Data Found!</h4>
                </tbody>
              </table>
            </div>
            <div className="col-lg-6" >
              <h2>Offical Work</h2>
              <table className="w-100 text-center" >
                <thead >
                  <tr>
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Status</th>
                  </tr>
                </thead>
                <tbody className="w-100" style={{height:"200px"}} >
                  <h4 className="text-center text-danger" >No Data Found!</h4>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Dashboard;
