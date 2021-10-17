// import { Popover } from 'bootstrap';
import React, { useState } from "react";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import Wrapper from "../../components/layouts/Wrapper";
import ConfirmDelete from "./ConfirmDelete";

const SingleProjectCard = ({ project, page }) => {
  const [modalOpen, setModalOpen] = useState(false);

  //   const dispatch = useDispatch();
  //   const id = useParams();

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
          <strong>Team Lead:</strong> {project.team_lead}
        </span>
        <span>
          {" "}
          <strong>Initial Activity:</strong> {project.initial_activity}
        </span>
      </div>
      <div className="description" style={{ padding: "10px", color: "black" }}>
        <h6>Project Description</h6>
        <p>{project.description} </p>
      </div>
      <div className="extra content">
        <div className="ui three buttons">
          <button className="ui green basic button">
            <Link
              to="/newtask"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Add Task
            </Link>
          </button>
          <button className="ui teal basic button">
            <Link
              to={`/projects/edit`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Edit
            </Link>
          </button>
          <button
            className="ui red basic button"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Delete
          </button>
          {modalOpen && (
            <ConfirmDelete
              setOpenModal={setModalOpen}
              //   onClick={dispatch(deleteProjectLoad(id))}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProjectCard;
