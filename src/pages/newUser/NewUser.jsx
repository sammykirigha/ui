import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Wrapper from "../../components/layouts/Wrapper";
import { userRegister } from "../../redux/actions/auth";
import "./NewUser.css";

const NewUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    full_name: "",
    email: "",
    gender: "",
    age: null,
    password: "",
    isAdmin: false,
  });

  const formSubmit = (e) => {
    e.preventDefault();
    console.log({ user });
    dispatch(userRegister(user));
    history.push("/userlist");
  };
  const onInputChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const checkBoxChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <Wrapper>
      <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form onSubmit={formSubmit} className="newUserForm">
          <div className="newUserItem">
            <label htmlFor="">Username</label>
            <input
              type="text"
              placeholder="Enter name"
              id="username"
              name="username"
              onChange={onInputChange}
              value={user.username}
            />
          </div>
          <div className="newUserItem">
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              placeholder="Enter full names"
              name="full_name"
              value={user.full_name}
              id="full_name"
              onChange={onInputChange}
            />
          </div>
          <div className="newUserItem">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Enter email"
              name="email"
              value={user.email}
              id="email"
              onChange={onInputChange}
            />
          </div>
          <div className="newUserItem">
            <label htmlFor="">password</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              id="password"
              onChange={onInputChange}
            />
          </div>
          <div className="newUserItem">
            <label>Gender</label>
            <select name="gender" id="gender" onChange={onInputChange}>
              <option>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Others</option>
            </select>
          </div>
          <div
            className="newUserItem"
            style={{ width: "100px", height: "50px" }}
          >
            <label htmlFor="">Age</label>
            <input
              type="number"
              placeholder="age"
              name="age"
              onChange={onInputChange}
            />
          </div>
          <div className="newUserItem" style={{ width: "200px" }}>
            <label>IsAdmin</label>
            <input
              onChange={checkBoxChange}
              className="newUserSelect"
              name="isAdmin"
              type="checkbox"
              checked={user.isAdmin}
            />
          </div>
          <button className="newUserButton">Add User</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default NewUser;
