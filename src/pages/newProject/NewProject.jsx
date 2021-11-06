import React, { useEffect, useState } from "react";
import "./NewProject.css";
import moment from "moment";
import Select, { components, DropdownIndicatorProps } from "react-select";
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
  const [selectedOoption, setSelectedOption] = useState([]);

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

  const generateOptions = (fusers) => {
    return fusers.map((user) => {
      return {
        label: user.username + " " + user.full_name,
        value: user.id,
      };
    });
  };

  const unAssignedUsers = users.filter(
    (user) => user.project_assigned === "unassigned"
  );
  useEffect(() => {
    if (users?.length === 0) dispatch(loadAllUsers());
  }, []);

  return (
    <Wrapper>
      <div className="newProject">
        <h4 className="addProjectTitle">New Project</h4>
        <form className="addProjectForm" onSubmit={onFormSubmit}>
          <div className="formBody">
            <div className="left">
              <div className="addProjectItem">
                <label>Project name </label>
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
                <label> Description </label>
                <input
                  type="text"
                  rows="3"
                  name="description"
                  id="description"
                  placeholder="enter description"
                  autoComplete="off"
                  value={project.description}
                  onChange={onChange}
                />
              </div>
              <div className="addProjectItem">
                <label> Duration </label>
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
                <label> Start Date </label>
                <ReactDatePicker
                  name="date"
                  id="date"
                  value={project.start_date}
                  autoComplete="off"
                  dateFormat="dd/MM/yyyy"
                  selected={project.start_date}
                  minDate={minDate}
                  style={{ with: "100%" }}
                  onChange={(date) =>
                    setProject({ ...project, start_date: date })
                  }
                  filterDate={(date) =>
                    date.getDay() !== 6 && date.getDay() !== 0
                  }
                  isClearable
                  showYearDropdown
                  scrollabelYearDropdown
                />
              </div>
            </div>
            <div className="right">
              <div className="addProjectItem">
                <label> Initial Activity </label>
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
              <div className="addProjectItem">
                <label> Team Lead </label>
                <select
                  name="team_lead_id"
                  id="team_lead_id"
                  onChange={onChange}
                >
                  <option className="option">Select Team Lead</option>
                  {unAssignedUsers?.map((user) => (
                    <option value={user.id}>
                      {user.username} {user.full_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="addProjectItem">
                <label> Project Team </label>
                <Select isMulti options={() => generateOptions()} />
              </div>
            </div>
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
