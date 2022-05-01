import React, { useState } from "react";
import Container from "react-bootstrap/container";
import Button from "react-bootstrap/button";
import Form from "react-bootstrap/form";
import Alert from "react-bootstrap/alert";
import { signin } from "../../api";
import { storeAuthToken } from "../../utils";
import "./sign-in.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const handleUsernameChange = ({ target: { value } }) => {
    setUsername(value);
    setErrors([]);
  };

  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
    setErrors([]);
  };

  const login = async (event) => {
    event.preventDefault();
    const errors = [];
    if (!username) {
      errors.push("Username cannot be empty");
    }
    if (!password) {
      errors.push("Password cannot be empty");
    }
    if (errors.length) {
      setErrors([...errors]);
    } else {
      const response = await signin(username, password);
      if (response.error) {
        setErrors(response.error);
      } else if (response.token) {
        console.log(response.token);
        storeAuthToken(response.token);
        navigate('/dashboard');
      }
    }
  };

  return (
    <div className="sign-in-page-root pt-5">
      <Container className="bg-light sign-in w-25 rounded pt-1">
        {errors.length > 0 && (
          <Alert variant="danger" className="p-1 text-center">
            {errors.map((error) => {
              return <h6>{error}</h6>;
            })}
          </Alert>
        )}
        <h1 className="text-center">Sign in</h1>
        <Form className="pb-4" onSubmit={login}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={handleUsernameChange}
              value={username}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              value={password}
            />
          </Form.Group>
          <div className="w-100 d-grid">
            <Button type="submit" size="lg rounded-pill" id="sign-in-button">
              Sign in
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Signin;
