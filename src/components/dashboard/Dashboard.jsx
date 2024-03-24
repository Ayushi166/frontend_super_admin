import React, { useEffect, useState } from "react";
import Header from "../Header";
import { FiUserMinus } from "react-icons/fi";
import Chart from "react-apexcharts";
import { Table } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { BASE_URL } from "../../env";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const [projectsCount,setProjectsCount] = useState({});
  const [usersCount,setUsersCount] = useState({});
  const [projectsData,setProjectsData] = useState([]);
  const [grievanceData,setGrievanceData] = useState([]);
  const Navigate = useNavigate();

  const usersApi = async()=>{
    try{
      const myHeaders = new Headers();
myHeaders.append("Authorization",`Bearer ${localStorage.getItem("token")}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

 const response = await fetch(`${BASE_URL}/admin/dashboard`, requestOptions)
 const result = await response.json();
 if(result.status==="001"){
  setProjectsCount(result.projects_counts);
  setUsersCount(result.userCounts);
  setProjectsData(result.recentProjects);
  setGrievanceData(result.recentGrievances)
  const grievanceData = Object.entries(result.grievanceCounts)
  .filter(([key]) => key !== 'total') 
  .map(([label, value]) => ({ label, value }));
setChartData(prevState => ({
  ...prevState,
  series: grievanceData.map(data => data.value),
  options: {
    ...prevState.options,
    labels: grievanceData.map(data => data.label),
  }
}));
 }else if(result.status==="002") {
  localStorage.removeItem("token");
  localStorage.removeItem("name")
  Navigate("/");
 }
    }catch(e){
      console.log(e);
    }
  }

  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 968px)",
  });

  const [chartData, setChartData] = useState({
    series: [0, 0,0],
    options: {
      chart: {
        type: "donut",
      },
      colors: ["#16C37A", "#C3BC16","#C31616"],
      labels: ["Closed", "Pending","Rejected"],
      responsive: [
        {
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  useEffect(()=>{
    usersApi();
  },[])

  return (
    <>
      <div
        className="example"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Header heading="Rural Development Department" />
        <div
          className={`container-fluid main-section ${isMobileOrTablet ? "p-1" : "p-5"}`}
          style={{ flexGrow: 1 }}
        >
          <div className="row" style={{ rowGap: "1rem" }}>
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="container bg-white das-card">
                <div className="row">
                  <div className="col-12">
                    <h3 className="mb-0">
                      Work/Projects
                    </h3>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-center gap-2 py-3">
                    <div className="total-project">
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p className="mb-0 das-title">
                        Total Work
                      </p>
                      <h5>{projectsCount?.total || 0}</h5>
                    </div>
                  </div>
                  {/* <Divider orientation="vertical"   inset="none" /> */}
                  <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-center gap-2 py-3">
                    <div className="inprogress">
                    <i class="fa fa-line-chart" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p className="mb-0 das-title">
                        Inprogress
                      </p>
                      <h5>{projectsCount?.progress || 0}</h5>
                    </div>
                  </div>
                  {/* <Divider orientation="vertical" inset="none" /> */}
                  <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-center gap-2 py-3">
                    <div className="completed">
                    <i class="fa fa-bar-chart" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p className="mb-0 das-title">
                        Completed
                      </p>
                      <h5>{projectsCount?.closed || 0}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container bg-white mt-3 das-card">
                <div className="row">
                  <div className="col-12">
                    <h3 className="mb-0 " style={{ fontFamily: "Poppins" }}>
                      Users
                    </h3>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-center gap-2 py-3">
                    <div className="total-users">
                    <i class="fa fa-users" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p className="mb-0 das-title">
                        Total Users
                      </p>
                      <h5>{usersCount?.total || 0}</h5>
                    </div>
                  </div>
                  {/* <Divider orientation="vertical"   inset="none" /> */}
                  <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-center gap-2 py-3">
                    <div className="offical">
                    <i class="fa fa-user-plus" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p className="mb-0 das-title">
                        Offical
                      </p>
                      <h5>{usersCount?.official || 0}</h5>
                    </div>
                  </div>
                  {/* <Divider orientation="vertical" inset="none" /> */}
                  <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-center gap-2 py-3">
                    <div className="citizen">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p className="mb-0 das-title">
                        Citizen
                      </p>
                      <h5>{usersCount?.citizen || 0}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 ">
              <div className="card p-2 border-0 das-card">  
              <h3>
              Grievance
              </h3>
              <Chart
                className="w-100"
                options={chartData.options}
                type="donut"
                series={chartData.series}
              />
                </div>
              
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <div className="card p-2 border-0 das-card">
                <h3>Recent Grievance</h3>
                <Table className="w-100 recent">
                  <thead>
                    <tr>
                      <th
                        className="p-1"
                        >
                        S.no
                      </th>
                      <th
                        className="p-1"
                      >
                        Name
                      </th>
                      <th
                        className="p-1"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="w-100">
                    {grievanceData?.map((value, key) => {
                      return (
                        <tr key={key}>
                          <td className="p-1 py-2">{key+1}</td>
                          <td className="p-1 py-2">{value.grievance_details}</td>
                          <td className="">
                            <span
                              className="px-2 py-1"
                              style={{
                                background:
                                  value.grievance_status == 0
                                    ? "#FAFFE5"
                                    : value.grievance_status== 1?"#E5FFF2":"#FFE5E5",
                                color:
                                  value.grievance_status == 0
                                    ? "#C3BC16"
                                    : value.grievance_status== 1?"#16C37A":"#C31616",
                                borderRadius: "8px",
                              }}
                            >
                              {value.grievance_status==0?"Pending":value.grievance_status==1?"Closed":"Rejected"}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <div className="card p-2 border-0 das-card ">
                <h3 style={{ fontFamily: "Poppins" }}>Recent Works/Projects</h3>
                <Table className="w-100 recent">
                  <thead>
                    <tr>
                      <th
                        className="p-1"
                      >
                        S.no
                      </th>
                      <th
                        className="p-1"
                      >
                        Name
                      </th>
                      <th
                        className="p-1"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="w-100">
                    {projectsData?.map((value, key) => {
                      return (
                        <tr key={key}>
                          <td className="p-1 py-2">{key+1}</td>
                          <td className="p-1 py-2">{value.remarks}</td>
                          <td className="">
                            <span
                              className="px-2 py-1"
                              style={{
                                background:
                                value.project_status == 0
                                    ? "#FAFFE5"
                                    : value.project_status== 1?"#E5FFF2":"#FFE5E5",
                                color:
                                value.project_status == 0
                                    ? "#C3BC16"
                                    : value.project_status== 1?"#16C37A":"#C31616",
                                borderRadius: "8px",
                              }}
                            >
                              {value.project_status==0?"Pending":value.project_status==1?"Completed":"Rejected"}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
