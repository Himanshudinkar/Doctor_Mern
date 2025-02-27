import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import BASE_URL from "../config";

const MyPatient = () =>{

     const [mydata, setMydata] = useState([]);

    const loadData=async()=>{
        let api=`${BASE_URL}/doctor/patientlist/?docid=${localStorage.getItem("docid")}`;
        const response = await axios.get(api);
        console.log(response)
        setMydata(response.data);
    }

    useEffect(()=>{
        loadData();
    }, []);


    const ans = mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.disease}</td>
                <td>{key.city}</td>
                <td>{key.mobile}</td>
                <td>{key.email}</td>
            </tr>
            
            </>
        )
    })


    return(
        <>
        
         <div className="drcontent">
            <h1>My Patient List.</h1>
            <img src="https://wpthemesgrid.com/themes/medikit/img/section-img.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet.</p>
            <p>pretiumts</p>
         </div>
        

         <Table striped bordered hover style={{width:"900px",marginRight:"60px",marginTop:"50px"}}>
      <thead>
        <tr>
          <th>Pateint Name</th>
          <th>Disease</th>
          <th>City</th>
          <th>Mobile no.</th>
          <th> Email</th>
        </tr>
      </thead>
      <tbody>
       {ans}
        </tbody>
        </Table>

        </>
    )
}

export default MyPatient