import React from "react";
import Header from "../Header";
import { Option, Select } from "@mui/joy";
import { Button } from "@mui/material";

const data = [];
console.log(data.length)

const Categories = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header heading="Welcome to SuperAdmin!" />
      <div className="container h-100 pt-3" style={{ flex: 1 }}>
        <div className="row h-100">
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
                <Select variant="outlined" placeholder="Select Category">
                  <Option value="offical">Official</Option>
                  <Option value="citizen">Citizen</Option>
                </Select>
              </div>
              <div className="col-12" >
                <h3 className="text-danger text-center" >Currently No Data Found</h3>
              </div>
            {/* </>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Categories;
