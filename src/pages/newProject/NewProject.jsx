import React, { useEffect, useState } from "react";
import "./NewProject.css";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router";
import { Button, Dropdown, Form } from "semantic-ui-react";
import Wrapper from "../../components/layouts/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { loadAllUsers } from "../../redux/actions/users";
import { createProjectLoad } from "../../redux/actions/project";

const initialActivityOptions = [
  { key: 1, text: "Planning & Scheduling", value: "Planning & Scheduling" },
  { key: 2, text: "Project Timeline View", value: "Project Timeline View" },
  { key: 3, text: "Collaboration", value: "Collaboration" },
];

const NewProject = () => {
  const minDate = moment();
  const history = useHistory();
  const [project, setProject] = useState({
    project_name: "",
    start_date: moment().toDate(),
    duration: "",
    description: "",
    team_lead_id: "",
    initial_activity: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const selectHandle = (e, data) => {
    const { name, value } = data;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createProjectLoad(project));
    history.push("/projects");
  };

  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  useEffect(() => {
    if (users?.length === 0) dispatch(loadAllUsers());
  }, []);

  return (
    <Wrapper>
      <div className="newProject">
        <h1 className="addProjectTitle">New Project</h1>
        <form className="addProjectForm" onSubmit={onFormSubmit}>
          <div className="addProjectItem">
            <lable>Project name </lable>
            <input
              type="text"
              name="project_name"
              id="name"
              placeholder="enter project name"
              autoComplete="off"
              value={project.project_name}
              onChange={onChange}
            />
          </div>
          <div className="addProjectItem">
            <lable> Start Date </lable>
            <ReactDatePicker
              name="date"
              id="date"
              value={project.start_date}
              autoComplete="off"
              dateFormat="dd/MM/yyyy"
              selected={project.start_date}
              minDate={minDate}
              onChange={(date) => setProject({ ...project, start_date: date })}
              filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
              isClearable
              showYearDropdown
              scrollableYearDropdown
            />
          </div>
          <div className="addProjectItem">
            <lable> Duration </lable>
            <input
              type="text"
              name="duration"
              id="duration"
              placeholder="enter duration"
              autoComplete="off"
              value={project.duration}
              onChange={onChange}
            />
          </div>
          <div className="addProjectItem">
            <lable> Description </lable>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="enter description"
              autoComplete="off"
              value={project.description}
              onChange={onChange}
            />
          </div>
          <div className="addProjectItem">
            <lable> Team Lead </lable>
            <select name="team_lead_id" id="team_lead_id" onChange={onChange}>
              <option>Select Team Lead</option>
              {users?.map((user) => (
                <option value={user.id}>
                  {user.username} {user.full_name}
                </option>
              ))}
            </select>
          </div>
          <div className="addProjectItem">
            <lable> Initial Activity </lable>
            <Dropdown
              placeholder="Select Initial Activity"
              name="initial_activity"
              fluid
              search
              // value={handleSelect}
              onChange={selectHandle}
              selection
              options={initialActivityOptions}
            />
          </div>
          <button className="addProjectButton" type="submit">
            create
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default NewProject;
