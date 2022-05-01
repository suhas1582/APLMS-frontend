import React from "react";
import Navbar from "react-bootstrap/navbar";
import Button from 'react-bootstrap/button';
import './dashboard.css';
import { removeAuthToken } from "../../utils";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();
  const handleSignout = () => {
    removeAuthToken();
    navigate('/');
  }
  return (
    <div className="dashboard-root">
      <Navbar className='px-3'>
        <Navbar.Brand>My Dashboard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button onClick={handleSignout}>Sign out</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Dashboard;
