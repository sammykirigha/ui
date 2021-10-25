import React, { useEffect, useState } from "react";
import "./Project.css";
import Wrapper from "../../components/layouts/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import { Button } from "react-bootstrap";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { getSingleProjectLoad } from "../../redux/actions/project";
import TaskModal from "../../components/layouts/TaskModal";
import { getTasks } from "../../redux/actions/task";

const Project = () => {
  const [show, setShow] = useState(false);
  const [lUser, setLUser] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { project } = useSelector((state) => state.oneProj);
  const { users } = useSelector((state) => state.users);
  const { tasks } = useSelector((state) => state.tasks);
  console.log(
    "<<<<<>>>>>one task loop",
    tasks?.map((task) => task?.task_name)
  );

  let date = new Date(project.start_date);
  const dateString = moment(date).format("YYYY-MM-DD");

  const getTeamLead = (id) => {
    return users.find((user) => user.id === id);
  };

  useEffect(() => {
    dispatch(getSingleProjectLoad(id));
  }, []);

  useEffect(() => {
    dispatch(getTasks(id));
    console.log(tasks);
  }, [project]);

  useEffect(() => {
    const u = users?.filter((user) => user.id === project?.team_lead_id)[0];
    setLUser(u);
  }, []);

  return (
    <Wrapper>
      <div className="viewProject">
        <div className="projectheader">
          <span className="projectName">
            {" "}
            <strong>project name: </strong>
            {project.project_name}
          </span>
          <span className="projectId">
            <strong>project Id: </strong> {project.id}
          </span>
        </div>
        <div className="body">
          <div className="projectDate">
            <strong>Start Date: </strong> {dateString}
          </div>
          <div className="projectDuration">
            <strong>Project Duration: </strong> {project.duration}
          </div>
          <div className="projectDescription">
            <span>
              {" "}
              <strong> Project Description</strong>{" "}
            </span>
            <p style={{ marginLeft: "10px" }} className="description">
              {project.description}
            </p>
          </div>
        </div>
        <div className="otherInfo">
          <span className="teamLead">
            <strong>Team Lead:</strong> Sammy kirigha
          </span>
          <span className="activity">
            <strong>Initial Activity: </strong> {project.initial_activity}
          </span>
        </div>
        <div className="navigationButtons">
          <div className="ui three buttons">
            <button className="ui green basic button" onClick={handleShow}>
              Add Task
            </button>
            <button className="ui teal basic button">
              <Link
                to={`/projects/edit`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Edit
              </Link>
            </button>
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  backgroundColor: "white",
                  borderRadius: "0px",
                  color: "green",
                  minHeight: "36px",
                }}
                variant="primary"
                id="dropdown-basic"
              >
                See project Tasks
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {tasks?.length === 0 ? (
                  <span> no tasks for this project</span>
                ) : (
                  tasks?.map((task) => <li>{task.id}</li>)
                )}
              </Dropdown.Menu>
            </Dropdown>
            {
              <TaskModal
                user={lUser}
                id={id}
                show={show}
                handleClose={handleClose}
              />
              // modalOpen && (
              // <ConfirmDelete
              //   setOpenModal={setModalOpen}
              // />
              // )
            }
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Project;
