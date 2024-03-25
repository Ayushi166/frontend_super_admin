import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { Table } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Select from 'react-select';
import { BASE_URL } from '../../env';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/joy';

const options = [
  { value: '3', label: 'All' },
  { value: '0', label: 'Pending' },
  { value: '1', label: 'Completed' },
  { value: '2', label: 'Rejected' }
];

const Work = () => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [data,setData] = useState([]);
  const Navigate = useNavigate();

  const getProjects = async()=>{
    try{
      const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

const raw = JSON.stringify({
  "type": selectedOption
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

 const response = await fetch(`${BASE_URL}/get/projects`, requestOptions);
 const result = await response.json();
 if(result.status==="001"){
  setData(result.projects)
 }else if(result.status==="002") {
  localStorage.removeItem("token");
  localStorage.removeItem("name")
  Navigate("/");
 }

    }catch(e){  
      console.log(e);
    }
  }

  useEffect(() => {
    getProjects();
  }, [selectedOption])
  

  return (


    
    <>
        <div className='example'
        style={{ display: "flex", flexDirection: "column", height: "100vh",overflowY:"auto" }}
      >
        <Header heading="Rural Development Department" />
        <div className="container h-100 pt-3" style={{flexGrow:1}} >
          <div className='row' style={{padding:"24px"}} >
            <div className='col-lg-8 col-md-8 col-sm-12' >
            <h3 className="mb-0">
        Works/Projects
              </h3>
            </div>

            <div className='col-lg-4 col-md-4 col-sm-12' >
            <Select
  className='w-100'
  value={options.find(option => option.value === selectedOption)}
  onChange={option => setSelectedOption(option.value)}
  options={options}
/>

            </div>

            <div className="col-12 bg-white das-card mt-4"  >
              


              <Table className="w-100" responsive >
            <thead>
              <tr>
                <th
                  className="p-1"
                   style={{ fontWeight: 500 }}
                >
                  S.no
                </th>
                <th
                  className="p-1"
                   style={{ fontWeight: 500 }}
                >
                  Name of work/Project
                </th>
                <th
                  className="p-1"
                   style={{ fontWeight: 500 }}
                >
                 Allotted Cost
                </th>
                <th
                  className="p-1"
                   style={{ fontWeight: 500 }}
                >
                  Start Date
                </th>
                <th
                  className="p-1"
                   style={{ fontWeight: 500 }}
                >
                  Status
                </th>

                <th
                  className="p-1"
                   style={{ fontWeight: 500 }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="w-100" >
            {
              data?.map((key,value)=>{
                const startDate = new Date(key.start_date);
    const formattedStartDate = startDate.toISOString().split('T')[0];
                return(

              <tr key={value} style={{verticalAlign:"middle"}} >
                  <td>{value+1}</td>
                  <td>{key.remarks}</td>
                  <td>₹ {key.allotted_cost}</td>
                  <td>{formattedStartDate}</td>
                  <td>{key.project_status===0?"Pending":key.project_status===1?"Completed":"Rejected"}</td>
                  <td><button className='btn btn-primary' >View Details</button></td>

              </tr>
                )
              })
            }

              
            </tbody>
          </Table>
      </div>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
