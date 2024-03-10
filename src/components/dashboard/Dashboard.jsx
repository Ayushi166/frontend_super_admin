import React from "react";
import Header from "../Header";
import { Divider } from "@mui/joy";

const Dashboard = () => {
  const data = [
    {
      sno : 1,
      name:"project1",
      status:"pending"
    },
    {
      sno : 1,
      name:"project2",
      status:"completed"
    },
    {
      sno : 1,
      name:"project3",
      status:"pending"
    },
    {
      sno : 1,
      name:"project4",
      status:"completed"
    },
    {
      sno : 1,
      name:"project5",
      status:"pending"
    },
    {
      sno : 1,
      name:"project6",
      status:"completed"
    },
    {
      sno : 1,
      name:"project7",
      status:"pending"
    },
    {
      sno : 1,
      name:"project8",
      status:"completed"
    },
  ]
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
                <p>Citizen Grievance</p>
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
              <h2>Citizen Grievance</h2>
              <table className="w-100 text-center" >
                <thead >
                  <tr>
                  <th className="p-1" style={{fontWeight:700}} >S.no</th>
                  <th className="p-1" style={{fontWeight:700}} >Name</th>
                  <th className="p-1" style={{fontWeight:700}} >Status</th>
                  </tr>
                </thead>
                <tbody className="w-100" >
                  {
                    data?.map((value,key)=>{
                      return(
                        <tr key={key} >
                          <td className="p-1" >{key}</td>
                          <td className="p-1" >{"Complaint " + key }</td>
                          <td className="p-1" >{value.status}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
            <div className="col-lg-6" >
              <h2>Offical Work</h2>
              <table className="w-100 text-center" >
                <thead >
                  <tr>
                  <th className="p-1" style={{fontWeight:700}} >S.no</th>
                  <th className="p-1" style={{fontWeight:700}} >Name</th>
                  <th className="p-1" style={{fontWeight:700}} >Status</th>
                  </tr>
                </thead>
                <tbody className="w-100" >
                  {
                    data?.map((value,key)=>{
                      return(
                        <tr key={key} >
                          <td className="p-1" >{key}</td>
                          <td className="p-1" >{value.name}</td>
                          <td className="p-1" >{value.status}</td>
                        </tr>
                      )
                    })
                  }
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
