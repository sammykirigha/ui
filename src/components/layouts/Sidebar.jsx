import { Home, PermIdentity } from "@mui/icons-material";
import LaunchIcon from "@mui/icons-material/Launch";
import TaskIcon from "@mui/icons-material/Task";
import Collapsible from "react-collapsible";

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem" active>
                <Home className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem" active>
              <LaunchIcon className="sidebarIcon" />
              <Collapsible trigger="Projects">
                <li>
                  <Link to="/newproject" className="link">
                    Add new Project
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="link">
                    All Projects
                  </Link>
                </li>
                {/* <li>
                  <Link to="/project" className="link">
                    Project
                  </Link>
                </li> */}
              </Collapsible>
            </li>
            <li className="sidebarListItem" active>
              <TaskIcon className="sidebarIcon" />
              <Collapsible trigger="Tasks">
                <li>
                  <Link to="/tasklist" className="link">
                    see all tasks
                  </Link>
                </li>
              </Collapsible>
            </li>
            <li className="sidebarListItem" active>
              <PermIdentity className="sidebarIcon" />
              <Collapsible trigger="Users">
                <li>
                  <Link to="/newuser" className="link">
                    Add User
                  </Link>
                </li>
                <li>
                  <Link to="/userlist" className="link">
                    All users
                  </Link>
                </li>
              </Collapsible>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
