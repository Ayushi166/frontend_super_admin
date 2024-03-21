import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Button, Option, Select } from "@mui/joy";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Form, Modal, Table } from "react-bootstrap";
import { BASE_URL } from "../../env";
import { Alert, Slide, Snackbar } from "@mui/material";
// import { Button } from "@mui/material";


const Users = () => {
  const [selectedValue,setSelectedValue] = useState(1);
  const [data,setData] = useState([]);
  const Navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const getOfficials = async()=>{
    try{
        const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

const requestOptions = {
method: "GET",
headers: myHeaders,
redirect: "follow"
};

const response = await fetch(`${BASE_URL}/show/all/officials`, requestOptions)
const result = await response.json();
if(result.status==="001"){
setData(result.officials);
}else if(result.status==="002") {
localStorage.removeItem("token");
localStorage.removeItem("name")
Navigate("/");
}

    }catch(e){
        console.log(e)
    }
}

const addOfficial = async()=>{
  try{
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

const raw = JSON.stringify({
  "firstName": firstName,
  "lastName": lastName,
  "mobile": mobile,
  "email": email,
  "password": password
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

const response = await fetch(`${BASE_URL}/add/official`, requestOptions)
const result = await response.json();
  if(result.status==="001"){
    setOpen(true);
    handleClose();
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobile("");
    setPassword("");
    getOfficials()
  }else if(result.status==="VAL_ERR"){
    setOpen1(true);
  }else if(result.status==="002") {
    localStorage.removeItem("token");
    localStorage.removeItem("name")
    Navigate("/");
    }
  }catch(e){
    console.log(e)
  }
}

const deleteOffical = async(id)=>{
  try{
    const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

const requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  redirect: "follow"
};
  
 const response = await fetch(`${BASE_URL}/delete/official/${id}`, requestOptions)
 const result = await response.json();
 if(result.status==="001"){
   setOpen2(true);
   getOfficials();
 }else if(result.status==="002") {
  localStorage.removeItem("token");
  localStorage.removeItem("name")
  Navigate("/");
  }
  
  }catch(e){
    console.log(e);
  }
}


const [open, setOpen] = React.useState(false);
const [open1, setOpen1] = React.useState(false);
const [open2, setOpen2] = React.useState(false);

const handleClose1 = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }

  setOpen(false);
};
const handleClose2 = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }

  setOpen1(false);
};
const handleClose3 = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }

  setOpen2(false);
};
useEffect(()=>{
  getOfficials();
},[])
  return (
    <>

<Snackbar
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose1}
      >
        <Alert severity="success" variant="standard" sx={{ width: "100%" }}>
        Official added successfully
        </Alert>
      </Snackbar>
<Snackbar
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open1}
        autoHideDuration={6000}
        onClose={handleClose2}
      >
        <Alert severity="error" variant="standard" sx={{ width: "100%" }}>
        Pls fill out all fields
        </Alert>
      </Snackbar>
<Snackbar
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open2}
        autoHideDuration={6000}
        onClose={handleClose3}
      >
        <Alert severity="success" variant="standard" sx={{ width: "100%" }}>
          Deleted Successfully
        </Alert>
      </Snackbar>

    <div className='example' style={{ display: "flex", flexDirection: "column", height: "100vh",overflowY:"auto" }}>
      <Header heading="Rural Development Department" />
      <div className="container h-100 pt-3" style={{flexGrow:'1'}} >
        <div className="row">
        {/* {
            data.length <= 0 && (
          <div className="col-12 d-flex flex-column align-items-center justify-content-center">
            <svg
              width="60"
              height="71"
              viewBox="0 0 80 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.32"
                d="M36.6665 4.66699C18.7172 4.66699 4.1665 19.2177 4.1665 37.167C4.1665 55.1162 18.7172 69.667 36.6665 69.667C45.6404 69.667 53.7689 66.0266 59.6475 60.148C65.5261 54.2694 69.1665 46.1409 69.1665 37.167C69.1665 19.2177 54.6158 4.66699 36.6665 4.66699Z"
                fill="#3490F6"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M61.9199 62.6533C62.6648 61.6587 64.075 61.4563 65.0696 62.2012L75.9692 70.3642C76.9638 71.1091 77.1663 72.5193 76.4214 73.5139C75.6765 74.5085 74.2663 74.711 73.2717 73.9661L62.3721 65.803C61.3774 65.0581 61.175 63.6479 61.9199 62.6533Z"
                fill="#3490F6"
              />
            </svg>

            <h3 style={{fontWeight:"bold"}} >You don’t have any categories yet</h3>
            <h6 style={{fontWeight:400}} >Create a new category by adding category </h6>
            <Button className="mt-3" variant="contained" size="small" >+ Add Category</Button>
          </div>
            )
        } */}
          {/* {data.length > 0 && (
            <> */}
              <div className="col-2">
                <Select variant="outlined"  defaultValue={selectedValue}>
                  <Option value="1">Official</Option>
                  <Option value="2">Citizen</Option>
                </Select>
              </div>
              <div className="col-12 pt-4" >
              <div className="d-flex align-items-center justify-content-between pb-3" >
        {
          selectedValue==1?<>
          <h3 className="">
        Officials
              </h3>
          </>:<>
          <h3 className="">
        Citizens
              </h3>
          </>
        }

        {
          selectedValue==1?<>
            <Button onClick={()=>{
              handleShow()
              
            }} sx={{fontFamily:"Poppins"}} startDecorator={<Add />} color="primary" >Add Offical</Button>
          </>:<></>
        }
              </div>
              {
                selectedValue==1?<>
                <Table className="w-100" responsive >
                  <thead>
                    <tr >
                      <th
                        className="p-1"
                        style={{fontWeight:500}}
                      >
                        S.no
                      </th>
                      <th
                        className="p-1"
                        style={{fontWeight:500}}
                      >
                        First Name
                      </th>
                      <th
                        className="p-1"
                        style={{fontWeight:500}}
                      >
                       Last Name
                      </th>
                      <th
                        className="p-1"
                        style={{fontWeight:500}}
                      >
                        Email
                      </th>

                      <th
                        className="p-1"
                        style={{fontWeight:500}}
                      >
                        Mobile
                      </th>
                      <th className='p-1'  style={{fontWeight:500}} >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="w-100">

                       {
                        data?.map((res,key)=>{
                            return(
                                <>
                    <tr key={key} >
                                <td className='mb-0' >{key+1}</td>
                                <td className='mb-0' >{res.firstName}</td>
                                <td className='mb-0' >{res.lastName}</td>
                                <td className='mb-0' >{res.email}</td>
                                <td className='mb-0' >{res.mobile}</td>
                                <td className='' ><button className='btn btn-danger' onClick={()=>deleteOffical(res.id)} >Delete</button></td>
                    </tr>
                                </>
                            )
                        })
                       }

                    
                  </tbody>
                </Table>
                </>:<>

                <h3 className="text-danger text-center" >Currently No Data Found</h3>
                </>
              }
              </div>
            {/* </>
          )} */}
        </div>
      </div>
    </div>



    {/* modal for add officials  */}
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton className="border-0" >
          <Modal.Title>Add Official</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupFname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupLname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0" >
          <button onClick={addOfficial} className="btn btn-primary" >Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Users;
