import React, { useState } from "react";
import "./NewProject.css";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router";
import { Button, Dropdown, Form } from "semantic-ui-react";

const teamLeadMembersOptions = [
  { key: 1, text: "Sammy", value: "Sammy" },
  { key: 2, text: "Dorcis", value: "Dorcis" },
  { key: 3, text: "Kirigha", value: "Kirigha" },
  { key: 4, text: "John", value: "John" },
  { key: 5, text: "Mwasho", value: "Mwasho" },
];

const initialActivityOptions = [
  { key: 1, text: "Planning & Scheduling", value: "Planning & Scheduling" },
  { key: 2, text: "Project Timeline View", value: "Project Timeline View" },
  { key: 3, text: "Collaboration", value: "Collaboration" },
];

const NewProject = () => {
  const [project, setProject] = useState({
    project_name: "",
    duration: "",
    start_date: moment().toDate(),
    duration: "",
    description: "",
    team_lead: "",
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

  const minDate = moment();

  return (
    <div className="newProject">
      <h1 className="addProjectTitle">New Project</h1>
      <form className="addProjectForm">
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
          <Dropdown
            placeholder="select Team Lead"
            name="team_lead"
            fluid
            search
            // value={handleSelect}
            onChange={selectHandle}
            selection
            options={teamLeadMembersOptions}
          />
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
  );
};

export default NewProject;

// import moment from "moment";
// import React, { useState } from "react";
// import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";
// import { Button, Dropdown, Form } from "semantic-ui-react";
// import { createProjectLoad } from "../../redux/actions/project";

// const teamLeadMembersOptions = [
//   { key: 1, text: "Sammy", value: "Sammy" },
//   { key: 2, text: "Dorcis", value: "Dorcis" },
//   { key: 3, text: "Kirigha", value: "Kirigha" },
//   { key: 4, text: "John", value: "John" },
//   { key: 5, text: "Mwasho", value: "Mwasho" },
// ];

// const initialActivityOptions = [
//   { key: 1, text: "Planning & Scheduling", value: "Planning & Scheduling" },
//   { key: 2, text: "Project Timeline View", value: "Project Timeline View" },
//   { key: 3, text: "Collaboration", value: "Collaboration" },
// ];

// const ProjectForm = (props) => {
//   const [project, setProject] = useState({
//     project_name: "",
//     start_date: moment().toDate(),
//     duration: "",
//     description: "",
//     initial_activity: "",
//     initial_activity: "",
//   });
//   const [handleSelect, sethandleSelect] = useState(teamLeadMembersOptions.text);
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state.create);
//   const history = useHistory();

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setProject((prev) => ({ ...prev, [name]: value }));
//   };

//   const selectHandle = (e, data) => {
//     const { name, value } = data;
//     setProject((prev) => ({ ...prev, [name]: value }));
//   };

//   const onFormSubmit = (e) => {
//     e.preventDefault();
//     dispatch(createProjectLoad(project));
//     history.push("/projects");
//   };

//   const minDate = moment();

//   return (
//     <div className="ui grid">
//       <div className="ten twelve wide centered column"></div>
//       <Form onSubmit={onFormSubmit}>
//         <Form.Field>
//           <label htmlFor="name">
//             {" "}
//             Project name
//             <input
//               type="text"
//               name="project_name"
//               id="name"
//               placeholder="enter project name"
//               autoComplete="off"
//               value={project.project_name}
//               onChange={onChange}
//             />
//           </label>
//         </Form.Field>
//         <Form.Field>
//           <label htmlFor="date">
//             {" "}
//             Start Date
//             <ReactDatePicker
//               name="date"
//               id="date"
//               value={project.start_date}
//               autoComplete="off"
//               dateFormat="dd/MM/yyyy"
//               selected={project.start_date}
//               minDate={minDate}
//               onChange={(date) => setProject({ ...project, start_date: date })}
//               filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
//               isClearable
//               showYearDropdown
//               scrollableYearDropdown
//             />
//           </label>
//         </Form.Field>
//         <Form.Field>
//           <label htmlFor="duration">
//             {" "}
//             duration
//             <textarea
//               name="duration"
//               id="duration"
//               placeholder="type project duration"
//               rows="1"
//               value={project.duration}
//               onChange={onChange}
//             />
//           </label>
//         </Form.Field>
//         <Form.Field>
//           <label htmlFor="duration">
//             {" "}
//             Description
//             <textarea
//               name="description"
//               id="description"
//               placeholder="type project description"
//               rows="4"
//               value={project.description}
//               onChange={onChange}
//             />
//           </label>
//         </Form.Field>
//         <Form.Field>
//           <label>Team Lead</label>
//           <Dropdown
//             placeholder="select Team Lead"
//             name="team_lead"
//             fluid
//             search
//             value={handleSelect}
//             onChange={selectHandle}
//             selection
//             options={teamLeadMembersOptions}
//           />
//         </Form.Field>
//         <Form.Field>
//           <label>Initial Activity</label>
//           <Dropdown
//             placeholder="Select Initial Activity"
//             name="initial_activity"
//             fluid
//             search
//             value={handleSelect}
//             onChange={selectHandle}
//             selection
//             options={initialActivityOptions}
//           />
//         </Form.Field>

//         <Button primary type="submit">
//           {" "}
//           {props.btnText}
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default ProjectForm;
