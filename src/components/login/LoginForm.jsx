import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { userLogging } from '../../redux/actions/login';
import Validator from "validator";

export const validate = (data) => {
  const errors = {};
  if (Validator.isEmpty(data.email)) errors.email = "email can not be empty";
  if (Validator.isEmpty(data.password))
    errors.password = "password can nott be empty";
  return errors;
};

const formInputstyle = {
  color: "white",
  fontSize: "15px",
  letterspacing: "1px",
};

const LoginForm = () => {
  const history = useHistory();
  // const dispatch = useDispatch();

  // const state = useSelector((state) => state.log);
  // const [errors, setErrors] = useState({});
  // const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
    history.push("/dashboard");
    // dispatch(userLogging(user));
  };

  // useEffect(() => {
  //   if (state?.user?.id) history.push('/landing');
  // }, [state?.user?.id]);

  return (
    <div id="backgroundimg">
      <div className="ui grid">
        <div className="five wide column" />
        <div className="six wide column formBackground">
          <h1>Login Page</h1>
          <Form onSubmit={onLoginSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={onChange}
              />
              {/* {errors.email && <InLineError message={errors.email} />} */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={onChange}
              />
              {/* {errors.password && <InLineError message={errors.password} />} */}
            </Form.Group>
            <Button variant="primary" type="submit" id="login">
              Login
            </Button>
            <p style={formInputstyle} id="signup">
              Do not have an Account?
              <Link className="auth" to="/auth/signup">
                Signup
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
