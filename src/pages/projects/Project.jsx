import React, { useEffect, useState } from "react";
import "./Project.css";
import Wrapper from "../../components/layouts/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { getSingleProjectLoad } from "../../redux/actions/project";
import TaskModal from "../../components/layouts/TaskModal";
import { getTasks } from "../../redux/actions/task";

const Project = () => {
  const [show, setShow] = useState(false);
  const [tUsers, setTUsers] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { project } = useSelector((state) => state.oneProj);
  const { users } = useSelector((state) => state.users);
  const { tasks } = useSelector((state) => state.tasks);

  // const task_users = users?.filter((user) => user.id !== project?.team_lead_id);
  // console.log({ task_users });

  let date = new Date(project.start_date);
  const dateString = moment(date).format("YYYY-MM-DD");

  const getTeamLead = (id) => {
    return users.find((user) => user.id === id);
  };

  const user = getTeamLead(project.team_lead_id);
  console.log({ user });

  useEffect(() => {
    dispatch(getSingleProjectLoad(id));
  }, []);

  useEffect(() => {
    dispatch(getTasks(id));
    console.log(tasks);
  }, [project]);

  useEffect(() => {
    const task_users = users?.filter(
      (user) => user.id !== project?.team_lead_id
    );
    setTUsers(task_users);
  }, []);

  return (
    <Wrapper>
      <div className="viewProject">
        <h3 className="header">Project Details</h3>
        <div className="body">
          <div className="viewProjectLeft">
            <div className="infoDiv">
              <span className="projectName">Project Name:</span>
              <span className="projectinfo">{project.project_name}</span>
            </div>
            <div className="infoDiv">
              <span className="projectName">Start Date:</span>
              <span className="projectinfo">{dateString}</span>
            </div>
            <div className="infoDiv">
              <span className="projectName">Initial Activity:</span>
              <span className="projectinfo">{project.initial_activity}</span>
            </div>
            <div className="projectDescription">
              <span className="projectName">Project Description</span>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                molestias illum quae blanditiis? Placeat, modi. Eaque magnam
                placeat, nesciunt obcaecati corporis sit ducimus eius quis fuga,
                corrupti maiores, assumenda molestias! Beatae ex eos dolor illum
                repellendus neque aperiam accusamus at.
              </p>
            </div>
          </div>
          <div className="viewProjectRight">
            <span className="projectName">Project Team</span>
            <div className="teamList">
              <div className="item">
                {user.username} {user.full_name} --Project Team Lead
              </div>
              <div className="item">sammy</div>
              <div className="item">sammy</div>
              <div className="item">sammy</div>
              <div className="item">sammy</div>
              <div className="item">sammy</div>
            </div>
          </div>
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
                  <span> no tasks create one.</span>
                ) : (
                  tasks?.map((task) => <li>{task.task_name}</li>)
                )}
              </Dropdown.Menu>
            </Dropdown>
            {
              <TaskModal
                users={tUsers}
                id={id}
                show={show}
                handleClose={handleClose}
              />
            }
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Project;
