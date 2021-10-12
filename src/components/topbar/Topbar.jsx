import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import React from "react";
import Collapsible from "react-collapsible";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">User System</span>
          <span className="userName">
            Welcome <stron style={{ fontWeight: "600" }}>Samuel</stron> to user
            system
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://image.shutterstock.com/image-vector/user-avatar-icon-sign-profile-260nw-1145752283.jpg"
            alt=""
            className="topAvatar"
          />
          <Collapsible trigger="Account">
            <span
              style={{
                textDecoration: "none",
                fontSize: "12px",
                color: "black",
                cursor: "pointer",
              }}
            >
              Logout
            </span>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
