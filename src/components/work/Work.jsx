import React from 'react'
import Header from '../Header'
import { FiUserMinus } from "react-icons/fi";
import Chart from "react-apexcharts";
import { Table } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const Work = () => {
  return (


    
    <>
        <div className='example'
        style={{ display: "flex", flexDirection: "column", height: "100vh",overflowY:"auto" }}
      >
        <Header heading="Rural Development Department" />
        <div className="container h-100 p-5" style={{flexGrow:1}} >

        <h3 className="">
        Works/Projects
              </h3>

          <div className="row h-100">
            <div className="col-12">
            <div className="container bg-white das-card">
              


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
                        Name of work/Project
                      </th>
                      <th
                        className="p-1"
                      >
                       Address
                      </th>
                      <th
                        className="p-1"
                      >
                        Status
                      </th>

                      <th
                        className="p-1"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="w-100">

                    <tr>
                        <td>1</td>
                        <td>Project Name</td>
                        <td>Baramulla, Jammu & Kashmir, India (IN)</td>
                        <td>Inprogress</td>
                        <td>Approve</td>

                    </tr>
                    
                  </tbody>
                </Table>




            </div>


             





            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
