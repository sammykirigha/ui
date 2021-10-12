import React from "react";
import "./NewUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Enter name" name="username" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="Enter full names" name="fullname" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter email" name="email" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">password</label>
          <input type="text" placeholder="Enter password" name="password" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="Enter phone" name="phone" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Project Undertaking</label>
          <input type="text" placeholder="Enter project name" name="address" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label>Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label>Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label>Other</label>
          </div>
        </div>
        <div className="newUserItem" style={{ width: "100px", height: "50px" }}>
          <label htmlFor="">Age</label>
          <input type="number" placeholder="age" name="age" />
        </div>
        <div className="newUserItem" style={{ width: "200px" }}>
          <label>IsAdmin</label>
          <select className="newUserSelect" name="isAdmin" id="isAdmin">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
