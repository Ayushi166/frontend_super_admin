  import React, { useState } from "react";
  import Header from "../Header";
  import { FiUserMinus } from "react-icons/fi";
  import Chart  from 'react-apexcharts'
import { Table } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";


  const Dashboard = () => {
    const isMobileOrTablet = useMediaQuery({
      query: '(max-width: 968px)'
    })
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
          type: 'donut',
        },
        colors: ['#00AC4F', '#DF0404'], // Specify custom colors here
        labels: ['Closed', 'Pending'],
        responsive: [{
          // breakpoint: 480,
          options: {
            chart: {
              width: "100%"
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    });
    


    return (
      <>
        <div className='example'
          style={{ display: "flex", flexDirection: "column", height: "100vh",overflowY:"auto",overflowX:"hidden" }}
        >
          <Header heading="Rural Development Department" />
          <div className={`container-fluid ${isMobileOrTablet?"p-1":"p-5"}`} style={{flexGrow:1}} >
            <div className="row align-items-center" style={{rowGap: "1rem" }}>
              <div
                className="col-lg-8 col-md-12 col-sm-12 py-3"
                style={{
                  borderRadius: "30px",
                  border: "1px solid #F0F0F0",
                }}
              >
                <div className="container bg-white">
                  <div className="row">
                  <div className="col-12" >
                      <h3 className="mb-0 pt-3" style={{fontFamily:"Poppins"}} >Work Submitted</h3>
                  </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-center gap-2 py-3">
                      <div>
                        <svg
                          width="84"
                          height="84"
                          viewBox="0 0 84 84"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="42"
                            cy="42"
                            r="42"
                            fill="url(#paint0_linear_501_201)"
                          />
                          <path
                            d="M38.0302 41.0229C37.8552 41.0054 37.6452 41.0054 37.4527 41.0229C33.2877 40.8829 29.9802 37.4704 29.9802 33.2704C29.9802 28.9829 33.4452 25.5004 37.7502 25.5004C42.0377 25.5004 45.5202 28.9829 45.5202 33.2704C45.5027 37.4704 42.1952 40.8829 38.0302 41.0229Z"
                            stroke="#00AC4F"
                            stroke-width="2.625"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M50.7172 28.9996C54.1122 28.9996 56.8422 31.7471 56.8422 35.1246C56.8422 38.4321 54.2172 41.1271 50.9447 41.2496C50.8047 41.2321 50.6472 41.2321 50.4897 41.2496"
                            stroke="#00AC4F"
                            stroke-width="2.625"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M29.2805 47.4796C25.0455 50.3146 25.0455 54.9346 29.2805 57.7521C34.093 60.9721 41.9855 60.9721 46.798 57.7521C51.033 54.9171 51.033 50.2971 46.798 47.4796C42.003 44.2771 34.1105 44.2771 29.2805 47.4796Z"
                            stroke="#00AC4F"
                            stroke-width="2.625"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M54.0947 57.0004C55.3547 56.7379 56.5447 56.2304 57.5247 55.4779C60.2547 53.4304 60.2547 50.0529 57.5247 48.0054C56.5622 47.2704 55.3897 46.7804 54.1472 46.5004"
                            stroke="#00AC4F"
                            stroke-width="2.625"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_501_201"
                              x1="74.55"
                              y1="2.14197e-06"
                              x2="42"
                              y2="84"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#D3FFE7" />
                              <stop offset="1" stop-color="#EFFFF6" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div>
                        <p className="mb-0" style={{ color: "#ACACAC" }}>
                          Total Work
                        </p>
                        <h3 style={{ color: "#333333" }}>10</h3>
                      </div>
                    </div>
                    {/* <Divider orientation="vertical"   inset="none" /> */}
                    <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-center gap-2 py-3">
                      <div>
                      <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="42" cy="42" r="42" fill="url(#paint0_linear_501_219)"/>
  <path d="M46.0666 53.75L48.6 56.2834L53.6666 51.2167" stroke="#00AC4F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M42.2669 40.117C42.1003 40.1003 41.9003 40.1003 41.7169 40.117C37.7503 39.9837 34.6003 36.7337 34.6003 32.7337C34.5836 28.6503 37.9003 25.3337 41.9836 25.3337C46.0669 25.3337 49.3836 28.6503 49.3836 32.7337C49.3836 36.7337 46.2169 39.9837 42.2669 40.117Z" stroke="#00AC4F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M41.9831 58.3498C38.9498 58.3498 35.9331 57.5832 33.6331 56.0498C29.5998 53.3498 29.5998 48.9498 33.6331 46.2665C38.2165 43.1998 45.7331 43.1998 50.3165 46.2665" stroke="#00AC4F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
  <linearGradient id="paint0_linear_501_219" x1="74.55" y1="2.14197e-06" x2="42" y2="84" gradientUnits="userSpaceOnUse">
  <stop stop-color="#D3FFE7"/>
  <stop offset="1" stop-color="#EFFFF6"/>
  </linearGradient>
  </defs>
  </svg>

                      </div>
                      <div>
                        <p className="mb-0" style={{ color: "#ACACAC" }}>
                          Completed
                        </p>
                        <h3 style={{ color: "#333333" }}>10</h3>
                      </div>
                    </div>
                    {/* <Divider orientation="vertical" inset="none" /> */}
                    <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-center gap-2 py-3">
                      
                      <div>
                      <FiUserMinus  className="p-4" style={{fontSize:"5rem",background:"#FFC5C5",color:"#DF0404",borderRadius:"50px"}}  />
                      </div>
                      <div>
                        <p className="mb-0" style={{ color: "#ACACAC" }}>
                          Pending
                        </p>
                        <h3 style={{ color: "#333333" }}>10</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container bg-white mt-3">
                  <div className="row">
                  <div className="col-12" >
                      <h3 className="mb-0 pt-3" style={{fontFamily:"Poppins"}} >Users</h3>
                  </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-center gap-2 py-3">
                      <div>
                        <svg
                          width="84"
                          height="84"
                          viewBox="0 0 84 84"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="42"
                            cy="42"
                            r="42"
                            fill="url(#paint0_linear_501_201)"
                          />
                          <path
                            d="M38.0302 41.0229C37.8552 41.0054 37.6452 41.0054 37.4527 41.0229C33.2877 40.8829 29.9802 37.4704 29.9802 33.2704C29.9802 28.9829 33.4452 25.5004 37.7502 25.5004C42.0377 25.5004 45.5202 28.9829 45.5202 33.2704C45.5027 37.4704 42.1952 40.8829 38.0302 41.0229Z"
                            stroke="#00AC4F"
                            stroke-width="2.625"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M50.7172 28.9996C54.1122 28.9996 56.8422 31.7471 56.8422 35.1246C56.8422 38.4321 54.2172 41.1271 50.9447 41.2496C50.8047 41.2321 50.6472 41.2321 50.4897 41.2496"
                            stroke="#00AC4F"
                            stroke-width="2.625"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M29.2805 47.4796C25.0455 50.3146 25.0455 54.9346 29.2805 57.7521C34.093 60.9721 41.9855 60.9721 46.798 57.7521C51.033 54.9171 51.033 50.2971 46.798 47.4796C42.003 44.2771 34.1105 44.2771 29.2805 47.4796Z"
                            stroke="#00AC4F"
                            stroke-width="2.625"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M54.0947 57.0004C55.3547 56.7379 56.5447 56.2304 57.5247 55.4779C60.2547 53.4304 60.2547 50.0529 57.5247 48.0054C56.5622 47.2704 55.3897 46.7804 54.1472 46.5004"
                            stroke="#00AC4F"
                            stroke-width="2.625"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_501_201"
                              x1="74.55"
                              y1="2.14197e-06"
                              x2="42"
                              y2="84"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#D3FFE7" />
                              <stop offset="1" stop-color="#EFFFF6" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div>
                        <p className="mb-0" style={{ color: "#ACACAC" }}>
                          Total Users
                        </p>
                        <h3 style={{ color: "#333333" }}>10</h3>
                      </div>
                    </div>
                    {/* <Divider orientation="vertical"   inset="none" /> */}
                    <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-center gap-2 py-3">
                      <div>
                      <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="42" cy="42" r="42" fill="url(#paint0_linear_501_219)"/>
  <path d="M46.0666 53.75L48.6 56.2834L53.6666 51.2167" stroke="#00AC4F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M42.2669 40.117C42.1003 40.1003 41.9003 40.1003 41.7169 40.117C37.7503 39.9837 34.6003 36.7337 34.6003 32.7337C34.5836 28.6503 37.9003 25.3337 41.9836 25.3337C46.0669 25.3337 49.3836 28.6503 49.3836 32.7337C49.3836 36.7337 46.2169 39.9837 42.2669 40.117Z" stroke="#00AC4F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M41.9831 58.3498C38.9498 58.3498 35.9331 57.5832 33.6331 56.0498C29.5998 53.3498 29.5998 48.9498 33.6331 46.2665C38.2165 43.1998 45.7331 43.1998 50.3165 46.2665" stroke="#00AC4F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
  <linearGradient id="paint0_linear_501_219" x1="74.55" y1="2.14197e-06" x2="42" y2="84" gradientUnits="userSpaceOnUse">
  <stop stop-color="#D3FFE7"/>
  <stop offset="1" stop-color="#EFFFF6"/>
  </linearGradient>
  </defs>
  </svg>

                      </div>
                      <div>
                        <p className="mb-0" style={{ color: "#ACACAC" }}>
                          Offical
                        </p>
                        <h3 style={{ color: "#333333" }}>0</h3>
                      </div>
                    </div>
                    {/* <Divider orientation="vertical" inset="none" /> */}
                    <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-center gap-2 py-3">
                      <div>
              
                      <FiUserMinus  className="p-4" style={{fontSize:"5rem",background:"#FFC5C5",color:"#DF0404",borderRadius:"50px"}}  />
                      </div>
                      <div>
                        <p className="mb-0" style={{ color: "#ACACAC" }}>
                          Citizen
                        </p>
                        <h3 style={{ color: "#333333" }}>0</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12" >
              <h3 className="" style={{fontFamily:"Poppins"}} >Complaints</h3>
              <Chart className="w-100"  options={chartData.options} type="donut" series={chartData.series} />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12" >
              <div className="card p-2 border-0" >

                <h3 style={{fontFamily:"Poppins"}} >Citizen Grievance</h3>
                <Table className="w-100 text-center">
                  <thead>
                    <tr>
                      <th className="p-1" style={{ fontWeight: 700,color:"#949494" }}>
                        S.no
                      </th>
                      <th className="p-1" style={{ fontWeight: 700,color:"#949494" }}>
                        Name
                      </th>
                      <th className="p-1" style={{ fontWeight: 700,color:"#949494" }}>
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
                          <td className=""><span className="px-2 py-1" style={{background:value.status=="pending"?"#FFF1F1":"#E9FFF5",color:value.status=="pending"?"#CC1313":"#2E8760",borderRadius:"8px"}} >{value.status}</span></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 bg-white " >
                    <div className="card p-2 border-0" >

                <h3 style={{fontFamily:"Poppins"}} >Offical Work</h3>
                <Table className="w-100 text-center">
                  <thead>
                    <tr>
                      <th className="p-1" style={{ fontWeight: 700,color:"#949494" }}>
                        S.no
                      </th>
                      <th className="p-1" style={{ fontWeight: 700,color:"#949494" }}>
                        Name
                      </th>
                      <th className="p-1" style={{ fontWeight: 700,color:"#949494" }}>
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
                          <td className=""><span className="px-2 py-1" style={{background:value.status=="pending"?"#FFF1F1":"#E9FFF5",color:value.status=="pending"?"#CC1313":"#2E8760",borderRadius:"8px"}} >{value.status}</span></td>
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
