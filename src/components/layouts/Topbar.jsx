import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Collapsible from "react-collapsible";
import { logout } from "../../redux/actions/login";
import { useHistory } from "react-router";

const Topbar = () => {
  const state = useSelector((state) => state.log);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          {/* <span className="logo">User System</span> */}
          <span className="userName">
            Welcome{" "}
            <stron style={{ fontWeight: "600" }}>
              {state.user.username} {state.user.full_name}
            </stron>{" "}
            to user system
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
              onClick={handleClick}
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
