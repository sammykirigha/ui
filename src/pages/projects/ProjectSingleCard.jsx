// import { Popover } from 'bootstrap';
import React from "react";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleProjectCard = ({ project, page, team_lead_name }) => {
  //formate date
  let date = new Date(project.start_date);
  const dateString = moment(date).format("YYYY-MM-DD");

  return (
    <div className="ui card">
      <div className="content">
        <div
          className="header"
          style={{ textTransform: "capitalize", color: "darkblue" }}
        >
          Project: {project.project_name}
        </div>
      </div>
      <div
        className="content"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "5px",
          }}
        >
          <span>
            {" "}
            Start Date: <strong> {dateString}</strong>
          </span>
          <span>
            {" "}
            Duration: <strong> {project.duration}</strong>
          </span>
        </div>
      </div>
      <div
        className="team"
        style={{
          display: "flex",
          flexDirection: "column",
          color: "black",
          padding: "10px",
        }}
      >
        <span>
          <strong>Team Lead:</strong> {team_lead_name.username}{" "}
          {team_lead_name.full_name}
        </span>
        <span>
          {" "}
          <strong>Initial Activity:</strong> {project.initial_activity}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <button className="ui teal basic button">
          {" "}
          <Link to={`/project/${project.id}`}>see more deteils</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default SingleProjectCard;
