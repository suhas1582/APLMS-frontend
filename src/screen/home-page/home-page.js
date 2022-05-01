import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/container";
import Navbar from "react-bootstrap/navbar";
import Button from "react-bootstrap/button";
import landingPage from "../../assets/lms-landing-page.png";
import "./home-page.css";
import { isSignedIn } from "../../utils";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const signinRediect = () => {
    navigate("/signin");
  };

  const dashboardRedirect = () => {
    navigate('/dashboard');
  }
  return (
    <div className="home-page-root pt-5">
      <Container className="bg-light home-page">
        <Navbar>
          <Container>
            <Link to="/" className="link">
              <Navbar.Brand>Learning Management System</Navbar.Brand>
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Link to="/" className="link">
                <Navbar.Text className="mx-3">Home</Navbar.Text>
              </Link>
              <Link to="/about" className="link">
                <Navbar.Text className="mx-3">About</Navbar.Text>
              </Link>
              <Link to="/contact" className="link">
                <Navbar.Text className="mx-3">Contact</Navbar.Text>
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {location.pathname === "/" && (
          <div className="d-flex align-items-center h-100">
            <Container className="justify-content-center">
              <h1 className="text-center">Manage Learning Online</h1>
              <p className="text-center">
                A simple solution to manage the activities involved in a
                learning process efficiently online.
              </p>
              {isSignedIn() ? (
                <div className='w-100 d-flex justify-content-center'>
                  <Button className="rounded-pill" size="lg" id='dashboard-button' onClick={dashboardRedirect}>Go to Dashboard</Button>
                </div>
              ) : (
                <div className="d-flex justify-content-center">
                  <Button variant="success" className="mx-2 rounded-pill">
                    Sign Up
                  </Button>
                  <Button
                    variant="warning"
                    className="mx-2 rounded-pill"
                    onClick={signinRediect}
                  >
                    Sign in
                  </Button>
                </div>
              )}
            </Container>
            <Container>
              <div className="h-100 w-100">
                <img
                  alt="landing page"
                  src={landingPage}
                  width="100%"
                  height="100%"
                />
              </div>
            </Container>
          </div>
        )}
        {location.pathname === "/about" && (
          <div className="d-flex h-100">
            <Container className="mt-3">
              <h1 className="text-center">Learning Management System</h1>
              <p className="text-center">
                A learning management system is a software application that
                provides the framework that handles all aspects of the learning
                process – it’s where you house, deliver, and track your training
                content. While most often called an LMS, other names that might
                be used is training management system, learning activity
                management system or even learning experience platform (LXP).
              </p>
              <p className="text-center">
                This project has been developed as a part of AICTE activity
                points. The main aim of this application is to ease the
                maintainance of various aspects of the learning and teaching
                process. Some of the main features of this application are as
                follows:
                <div className="text-start">
                  <ul>
                    <li>User authentication</li>
                    <li>Manage student details</li>
                    <li>Manage subject details</li>
                    <li>Manage assignment and submission details</li>
                    <li>Manage tests and examinations details and results</li>
                    <li>Manage learning content</li>
                  </ul>
                </div>
              </p>
            </Container>
          </div>
        )}
        {location.pathname === "/contact" && (
          <div className="d-flex h-100">
            <Container className="mt-3">
              <h1 className="text-center">Contact</h1>
              <p>
                In case of any issues, please reach out via email to the
                following mail ids. If you need more information regarding the
                project please contact Suhas R N on this email Id:
              </p>
            </Container>
          </div>
        )}
      </Container>
    </div>
  );
};

export default HomePage;
