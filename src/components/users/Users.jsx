import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Button } from "@mui/joy";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Form, Modal, Table } from "react-bootstrap";
import { BASE_URL } from "../../env";
import { Alert, Slide, Snackbar } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ManIcon from '@mui/icons-material/Man';
import Chip from '@mui/joy/Chip';
import WomanIcon from '@mui/icons-material/Woman';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Users = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const Navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getOfficials = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        `Bearer ${localStorage.getItem("token")}`
      );

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        `${BASE_URL}/show/all/officials`,
        requestOptions
      );
      const result = await response.json();
      if (result.status == "001") {
        setData(result.officials);
      } else if (result.status == "003") {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        Navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getCitizens = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        `Bearer ${localStorage.getItem("token")}`
      );

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        `${BASE_URL}/show/all/citizens`,
        requestOptions
      );
      const result = await response.json();
      if (result.status == "001") {
        setData1(result.citizens);
      } else if (result.status == "003") {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        Navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addOfficial = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Authorization",
        `Bearer ${localStorage.getItem("token")}`
      );

      const raw = JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        email: email,
        password: password,
        gender: gender,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(`${BASE_URL}/add/official`, requestOptions);
      const result = await response.json();
      if (result.status == "001") {
        getOfficials();
        setOpen(true);
        handleClose();
        setFirstName("");
        setLastName("");
        setEmail("");
        setMobile("");
        setPassword("");
        setGender("");
      } else if (result.status == "VAL_ERR") {
        setOpen1(true);
      } else if (result.status == "003") {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        Navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteOffical = async (id) => {
    setOpen2(false);
    try {
      const myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        `Bearer ${localStorage.getItem("token")}`
      );

      const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        `${BASE_URL}/delete/official/${id}`,
        requestOptions
      );
      const result = await response.json();
      if (result.status == "001") {
        getOfficials();
        setOpen2(true);
      } else if (result.status == "003") {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        Navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const deleteCitizen = async (id) => {
    setOpen2(false);
    try {
      const myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        `Bearer ${localStorage.getItem("token")}`
      );

      const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        `${BASE_URL}/delete/citizen/${id}`,
        requestOptions
      );
      const result = await response.json();
      if (result.status == "001") {
        getCitizens();
        setOpen2(true);
      } else if (result.status == "003") {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        Navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

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
  useEffect(() => {
    getOfficials();
    getCitizens();
  }, []);
  return (
    <>
      <Snackbar
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={2000}
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
        autoHideDuration={2000}
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
        autoHideDuration={2000}
        onClose={handleClose3}
      >
        <Alert severity="success" variant="standard" sx={{ width: "100%" }}>
          Deleted Successfully
        </Alert>
      </Snackbar>

      <div
        className="example"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <Header heading="Rural Development Department" />
        <div className="container h-100 pt-3" style={{ flexGrow: "1" }}>
          <div className="row">
            <div className="col-12">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Official" {...a11yProps(0)} />
                  <Tab label="Citizen" {...a11yProps(1)} />
                </Tabs>
              </Box>
            </div>
            <div className="col-12 pt-4">
              <div className="d-flex align-items-center justify-content-between pb-3">
                {value == 0 ? (
                  <>
                    <h3 className="">Officials</h3>
                  </>
                ) : (
                  <>
                    <h3 className="">Citizens</h3>
                  </>
                )}

                {value == 0 ? (
                  <>
                    <Button
                      onClick={() => {
                        handleShow();
                      }}
                      sx={{ fontFamily: "Poppins" }}
                      startDecorator={<Add />}
                      color="primary"
                    >
                      Add Official
                    </Button>
                  </>
                ) : (
                  <></>
                )}
              </div>
              {value == 0 ? (
                <>
                  <CustomTabPanel value={value} index={0}>
                    {data.length <= 0 ? (
                      <h3 className="text-danger text-center">
                        Currently No Data Found
                      </h3>
                    ) : (
                      <Table className="w-100" responsive>
                        <thead>
                          <tr>
                            <th className="p-1" style={{ fontWeight: 500 }}>
                              S.no
                            </th>
                            <th className="p-1" style={{ fontWeight: 500 }}>
                              Name
                            </th>
                            <th className="p-1" style={{ fontWeight: 500 }}>
                              Gender
                            </th>
                            <th className="p-1" style={{ fontWeight: 500 }}>
                              Email
                            </th>

                            <th className="p-1" style={{ fontWeight: 500 }}>
                              Mobile
                            </th>
                            <th className="p-1" style={{ fontWeight: 500 }}>
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="w-100">
                          {data?.map((res, key) => {
                            return (
                              <>
                                <tr key={key} style={{verticalAlign:"middle"}}>
                                  <td className="mb-0">{key + 1}</td>
                                  <td className="mb-0">
                                    {res.firstName + " " + res.lastName}
                                  </td>
                                  <td className="mb-0">
                                  <Chip
                                      variant="soft"
                                      color={res.gender=="Male"?"success":"primary"}
                                      startDecorator={res.gender=="Male"?<ManIcon sx={{fontSize:"1.2rem"}} />:<WomanIcon sx={{fontSize:"1.2rem"}}/>}
                                    >
                                      {res.gender}
                                    </Chip>
                                  </td>
                                  <td className="mb-0">{res.email}</td>
                                  <td className="mb-0">{res.mobile}</td>
                                  <td className="">
                                    <button
                                      className="btn btn-danger"
                                      onClick={() => deleteOffical(res.id)}
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                        </tbody>
                      </Table>
                    )}
                  </CustomTabPanel>
                </>
              ) : (
                <>
                  <CustomTabPanel value={value} index={1}>
                    {data1.length <= 0 ? (
                      <h3 className="text-danger text-center">
                        Currently No Data Found
                      </h3>
                    ) : (
                      <Table className="w-100" responsive>
                        <thead>
                          <tr>
                            <th className="p-1" style={{ fontWeight: 500 }}>
                              S.no
                            </th>
                            <th className="p-1" style={{ fontWeight: 500 }}>
                              Name
                            </th>
                            <th className="p-1" style={{ fontWeight: 500 }}>
                              Gender
                            </th>
                            <th className="p-1" style={{ fontWeight: 500 }}>
                              Email
                            </th>

                            <th className="p-1" style={{ fontWeight: 500 }}>
                              Mobile
                            </th>
                            <th className="p-1" style={{ fontWeight: 500 }}>
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="w-100">
                          {data1?.map((res, key) => {
                            return (
                              <>
                                <tr key={key} style={{verticalAlign:"middle"}} >
                                  <td className="mb-0">{key + 1}</td>
                                  <td className="mb-0">
                                    {res.firstName + " " + res.lastName}
                                  </td>
                                  <td className="mb-0">
                                    <Chip
                                      variant="soft"
                                      color={res.gender=="Male"?"success":"primary"}
                                      startDecorator={res.gender=="Male"?<ManIcon sx={{fontSize:"1.2rem"}} />:<WomanIcon sx={{fontSize:"1.2rem"}}/>}
                                    >
                                      {res.gender}
                                    </Chip>
                                  </td>
                                  <td className="mb-0">{res.email}</td>
                                  <td className="mb-0">{res.mobile}</td>
                                  <td className="">
                                    <button
                                      className="btn btn-danger"
                                      onClick={() => deleteCitizen(res.id)}
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                        </tbody>
                      </Table>
                    )}
                  </CustomTabPanel>
                </>
              )}
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
        <Modal.Header closeButton className="border-0">
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
            <Form.Group className="mb-3" controlId="formGroupGender">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                aria-label="Default select example"
              >
                <option hidden selected>
                  Open this select menu
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
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
        <Modal.Footer className="border-0">
          <button onClick={addOfficial} className="btn btn-primary">
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Users;
