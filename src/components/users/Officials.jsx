import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../env';
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Officials = () => {
    const [data,setData] = useState([]);
    const Navigate = useNavigate();
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
}else if(result.status==="003") {
    localStorage.removeItem("token");
    localStorage.removeItem("name")
    Navigate("/");
   }

        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getOfficials();
    },[])
  return (
   <>
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
                                <td className='mb-0' >{res.id}</td>
                                <td className='mb-0' >{res.firstName}</td>
                                <td className='mb-0' >{res.lastName}</td>
                                <td className='mb-0' >{res.email}</td>
                                <td className='mb-0' >{res.mobile}</td>
                                <td className='' ><button className='btn btn-danger' >Delete</button></td>
                    </tr>
                                </>
                            )
                        })
                       }

                    
                  </tbody>
                </Table>
   </>
  )
}

export default Officials
