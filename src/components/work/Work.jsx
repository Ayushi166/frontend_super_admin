import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { Table } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Select from 'react-select';
import { BASE_URL } from '../../env';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/joy';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import EventIcon from '@mui/icons-material/Event';

const options = [
  { value: '3', label: 'All' },
  { value: '0', label: 'Pending' },
  { value: '1', label: 'Completed' },
  { value: '2', label: 'Rejected' }
];

const Work = () => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [updateStatus,setUpdateStatus] = useState();
  const [data,setData] = useState([]);
  const Navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleClose = () =>{
    setShow(false);
    setSelectedItem(null);
  }
    
  const handleShow = (item) => {
    const startDate = new Date(item.start_date);
    const formattedStartDate = startDate.toISOString().split('T')[0];
    const completionDate = new Date(item.completion_date);
    const formattedCompletionDate = completionDate.toISOString().split('T')[0];
  
    setSelectedItem({
      ...item,
      start_date: formattedStartDate,
      completion_date: formattedCompletionDate
    });
    setShow(true);
  }

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
 }else if(result.status==="003") {
  localStorage.removeItem("token");
  localStorage.removeItem("name")
  Navigate("/");
 }

    }catch(e){  
      console.log(e);
    }
  }

  const complete = async()=>{
    try{
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
    }catch(e){
      console.log(e);
    }
  }
  const reject = async()=>{
    try{
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
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
            {data.length <= 0 ? (
                      <h3 className="text-danger text-center">
                        Currently No Data Found
                      </h3>
                    ) :(

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
                  Images
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

            {data.length <= 0 ? (
                      <h3 className="text-danger text-center">
                        Currently No Data Found
                      </h3>
                    ) :(
<>

            {
              data?.map((key,value)=>{
                const startDate = new Date(key.start_date);
    const formattedStartDate = startDate.toISOString().split('T')[0];
                return(

              <tr key={value} style={{verticalAlign:"middle"}} >
                  <td>{value+1}</td>
                  <td>{key.remarks}</td>
                  <td>₹ {key.allotted_cost}</td>
                  <td>
                  <Button color="neutral" size="sm" variant="soft" startDecorator={<EventIcon   />}>{formattedStartDate}</Button>
                  
                  </td>
                  <td>
                  <AvatarGroup total={4} sx={{justifyContent:"start"}} >
  <Avatar alt="Remy Sharp" src={key.photo1} />
  <Avatar alt="Travis Howard" src={key.photo2} />
  <Avatar alt="Agnes Walker" src={key.photo3} />
  <Avatar alt="Trevor Henderson" src={key.photo4} />
</AvatarGroup>
                  </td>
                  <td>
                  <span className="px-2 py-1" style={{
                                background:
                                key.project_status == 0
                                    ? "#FAFFE5"
                                    : key.project_status== 1?"#E5FFF2":"#FFE5E5",
                                color:
                                key.project_status == 0
                                    ? "#C3BC16"
                                    : key.project_status== 1?"#16C37A":"#C31616",
                                borderRadius: "8px",
                              }} >
                  {key.project_status===0?"Pending":key.project_status===1?"Completed":"Rejected"}

                  </span>
                  </td>
                  <td>
                  <button className='btn btn-primary' onClick={()=>{handleShow(key)}} >View Details</button></td>

              </tr>
                )
              })
            }
</>
                    )
            }
              
            </tbody>
          </Table>
                    )
            }
      </div>
           
          </div>
        </div>

        {/* view details modal started */}
        
      <Offcanvas show={show} onHide={handleClose} placement='end' backdrop="static" style={{width:"35%"}} >
        <Offcanvas.Header closeButton style={{borderBottom:"1px solid"}} >
          <Offcanvas.Title>Project</Offcanvas.Title>
        </Offcanvas.Header>
      {
        selectedItem && (
          <>
        <Offcanvas.Body>
        <div className='mb-2' >

        <p className='mb-0' >

        Remark : 
        </p>
        <h3>
          {selectedItem.remarks}
        </h3>
        </div>
        <div className='mb-2'>

        <p className='mb-0' >

        Address : 
        </p>
        <h5>
          {selectedItem.blockName}, {selectedItem.villageName}, {selectedItem.districtName}
        </h5>
        </div>
        <div className='d-flex align-items-center mb-2' >
            <div className='flex-grow-1' >
              <p className='mb-0' >
                Allotted Cost
              </p>
              <h5>
              <Button color="neutral" size="sm" variant="soft">₹ {selectedItem.allotted_cost}</Button>
              </h5>
            </div>
            <div className='flex-grow-1' >
              <p className='mb-0' >
                Estimatted Cost
              </p>
              <h5>
              <Button color="neutral" size="sm" variant="soft">₹ {selectedItem.estimated_cost}</Button>
              </h5>
            </div>
        </div>
        <div className='d-flex align-items-center mb-2' >
            <div className='flex-grow-1' >
              <p className='mb-0' >
                Start Date
              </p>
              <h5>
              <Button color="neutral" size="sm" variant="soft" startDecorator={<EventIcon   />}>{selectedItem.start_date}</Button>
              </h5>
            </div>
            <div className='flex-grow-1' >
              <p className='mb-0' >
                End Date
              </p>
              <h5>
              <Button color="neutral" size="sm" variant="soft" startDecorator={<EventIcon   />}>{selectedItem.completion_date}</Button>
              </h5>
            </div>
        </div>

        <div>
          {/* <p className='mb-0' >
            Images
          </p>
          <div className='container' >
            <div className='row' style={{rowGap:"10px"}} >
              <div className='col-12' >
                  {
                    selectedItem.photo1?<>
                      <img alt='s' style={{height:"100px",width:"100%",objectFit:"cover"}} src={selectedItem.photo1} />
                    </>:<></>
                  }
              </div>
              <div className='col-12' >
                  {
                    selectedItem.photo2?<>
                      <img alt='s' style={{height:"100px",width:"100%",objectFit:"cover"}} src={selectedItem.photo2} />
                    </>:<></>
                  }
              </div>
              <div className='col-12' >
                  {
                    selectedItem.photo3?<>
                      <img alt='s' style={{height:"100px",width:"100%",objectFit:"cover"}} src={selectedItem.photo3} />
                    </>:<></>
                  }
              </div>
              <div className='col-12' >
                  {
                    selectedItem.photo4?<>
                      <img alt='s' style={{height:"100px",width:"100%",objectFit:"cover"}} src={selectedItem.photo4} />
                    </>:<></>
                  }
              </div>
            </div>
          </div> */}
          <div >
          <p className='' >Update Status</p>
          <select className='w-100 py-2' onChange={(e)=>setUpdateStatus(e.target.value)} >
            <option value="1">Complete</option>
            <option value="2">Reject</option>
          </select>
          </div>
          <button className='w-100 btn btn-primary mt-2' onClick={()=>{
            {
              if(updateStatus==1){
                complete();
              }else if(updateStatus==2){
                reject();
              }
              
            }
          }} disabled={updateStatus<=0?true:false} >Update Status</button>
        </div>
        </Offcanvas.Body>
          </>
        ) 
      }
      </Offcanvas>
      </div>
    </>
  )
}

export default Work
