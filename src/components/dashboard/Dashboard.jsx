import React, { useState } from "react";
import Header from "../Header";
import { FiUserMinus } from "react-icons/fi";
import Chart from "react-apexcharts";
import { Table } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const Dashboard = () => {
  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 968px)",
  });
  const data = [
    {
      sno: 1,
      name: "project1",
      status: "pending",
    },
    {
      sno: 1,
      name: "project2",
      status: "completed",
    },
    {
      sno: 1,
      name: "project3",
      status: "pending",
    },
    {
      sno: 1,
      name: "project4",
      status: "completed",
    },
    {
      sno: 1,
      name: "project5",
      status: "pending",
    },
    {
      sno: 1,
      name: "project6",
      status: "completed",
    },
    {
      sno: 1,
      name: "project7",
      status: "pending",
    },
    {
      sno: 1,
      name: "project8",
      status: "completed",
    },
  ];

  const [chartData, setChartData] = useState({
    series: [50, 50],
    options: {
      chart: {
        type: "donut",
      },
      colors: ["#00AC4F", "#DF0404"], // Specify custom colors here
      labels: ["Closed", "Pending"],
      responsive: [
        {
          // breakpoint: 480,
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
                      <h5>10</h5>
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
                      <h5>10</h5>
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
                      <h5>10</h5>
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
                      <h5>10</h5>
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
                      <h5>0</h5>
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
                      <h5>0</h5>
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
                    {data?.map((value, key) => {
                      return (
                        <tr key={key}>
                          <td className="p-1 py-2">{key}</td>
                          <td className="p-1 py-2">{"Complaint " + key}</td>
                          <td className="">
                            <span
                              className="px-2 py-1"
                              style={{
                                background:
                                  value.status == "pending"
                                    ? "#FFF1F1"
                                    : "#E9FFF5",
                                color:
                                  value.status == "pending"
                                    ? "#CC1313"
                                    : "#2E8760",
                                borderRadius: "8px",
                              }}
                            >
                              {value.status}
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
                    {data?.map((value, key) => {
                      return (
                        <tr key={key}>
                          <td className="p-1 py-2">{key}</td>
                          <td className="p-1 py-2">{value.name}</td>
                          <td className="">
                            <span
                              className="px-2 py-1"
                              style={{
                                background:
                                  value.status == "pending"
                                    ? "#FFF1F1"
                                    : "#E9FFF5",
                                color:
                                  value.status == "pending"
                                    ? "#CC1313"
                                    : "#2E8760",
                                borderRadius: "8px",
                              }}
                            >
                              {value.status}
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
