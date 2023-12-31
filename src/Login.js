import React from "react";
import { Button, Form } from "react-bootstrap";
import qs from "qs";

function Login() {
  const params = qs.parse(window.location.search.replace("?", ""));

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`http://localhost:3000/registeration-info?id=${params?.id}`, "_blank");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "70vh" }}
    >
      <Form onSubmit={(e) => handleSubmit(e)}>
        <h1 className="mb-5">Login Here</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
