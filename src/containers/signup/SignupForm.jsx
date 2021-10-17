import React, { useState } from "react";
import Validator from "validator";
import PasswordValidator from "password-validator";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const validatepassword = new PasswordValidator();
validatepassword
  .is()
  .min(6)
  .is()
  .max(20)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .not()
  .spaces();

export const validate = (data) => {
  const errors = {};
  if (data.username.length < 3)
    errors.username = "username must be at least 3 characters";
  if (Validator.isNumeric(data.username))
    errors.username = "username can't be numbers";
  if (!Validator.isAlphanumeric(data.username))
    errors.username = "username can only contain letters and numbers";
  if (!Validator.isEmail(data.email) || Validator.isEmpty(data.email))
    errors.email = "please provide a valid email";
  if (Validator.isEmpty(data.password))
    errors.password = "Password can't be blank";
  if (!validatepassword.validate(data.password))
    errors.password =
      "password should not have spaces, must be more than 6 characters contain numbers and both lower and uppercase letters";
  if (!Validator.equals(data.password, data.conPassword))
    errors.password = "passwords do not match";
  return errors;
};

const formInputstyle = {
  color: "white",
  fontSize: "15px",
  letterspacing: "1px",
};

const SignupForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    conPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // const reg = useSelector((state) => state.reg);
  // const dispatch = useDispatch();
  const history = useHistory();

  const onChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    // const errors = validate(user);
    // setErrors({ errors });

    // if (Object.keys(errors).length === 0) {
    //   try {
    //     setLoading(true);
    //     dispatch(userRegister(user));
    //     history.push('/auth/login');
    //   } catch (err) {
    //     if (err.request.status === 500) {
    //       setErrors({
    //         message: 'Service is unavailable, please try again later'
    //       });
    //       setLoading(false);
    //     } else {
    //       setErrors({ errors: err.response.data });
    //     }
    //   }
    // }
  };

  return (
    <div id="backgroundimg">
      <div className="ui grid">
        <div className="five wide column" />
        <div className="six wide column formBackground">
          <h1>Signup Page</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                id="userSign"
                name="username"
                value={user.username}
                type="text"
                placeholder="Enter username"
                onChange={onChange}
              />
              {/* {errors.username && <p message={errors.username} ></p>} */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                id="signupEmail"
                name="email"
                value={user.email}
                type="email"
                placeholder="Enter email"
                onChange={onChange}
              />
              {errors.email && <p message={errors.email}></p>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                id="signupPass"
                name="password"
                value={user.password}
                type="password"
                placeholder="Password"
                onChange={onChange}
              />
              {errors.password && <p message={errors.password}></p>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCnPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                id="conPass"
                name="conPassword"
                value={user.conPassword}
                type="password"
                placeholder="Password"
                onChange={onChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" id="signupSubmit">
              Submit
            </Button>
            <p style={formInputstyle}>
              Already registered?
              <Link className="auth" to="/auth/login">
                Login
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
