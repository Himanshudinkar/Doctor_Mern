import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, Outlet, useNavigate} from "react-router-dom"
import React, { useEffect } from 'react';
import { FaHome } from "react-icons/fa";
import { MdInsertDriveFile } from "react-icons/md";
import { CgDisplayGrid } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const DoctorDashboard = () =>{

    const navigate = useNavigate();

    const nextpage = () =>{
        navigate("/home")
        localStorage.clear();
    }

     useEffect(()=>{
      if (!localStorage.getItem("name"))
      {
         navigate("/");
      }
   }, []);
    return(
        <>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className='admin'>APPOINTMENT DASHBOARD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Button style={{marginLeft:"560px"}} onClick={nextpage}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>


        <div className="content">
          
        <div className="side">
           <nav>
            <ul>
                <li><Link className='linkstyle' to={'doctorhome'}><FaHome />Home</Link></li>
                <li><Link className='linkstyle' to={'mypatient'} ><MdInsertDriveFile />My Patient</Link></li>
            </ul>
           </nav>
        </div>


        <div className="sidecontent">
            <Outlet/>
        </div>


        </div>

        
        </>
    )
}

export default DoctorDashboard