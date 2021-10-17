import React from "react";
import "./layout.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Wrapper = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <Topbar />
      <main>{children}</main>
    </div>
  );
};

export default Wrapper;
