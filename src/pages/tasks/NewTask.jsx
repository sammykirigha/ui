import React, { useState } from "react";
import "./NewTask.css";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router";
import { Button, Dropdown, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/layouts/Wrapper";

const NewTask = () => {
  const [task, setTask] = useState({
    task_name: "",
    duration: "",
    description: "",
    duration: "",
    task_id: null,
    user_id: null,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const minDate = moment();

  return (
    <div className="newTask">
      <form className="addTaskForm">
        <div className="addTaskItem">
          <lable>Task name </lable>
          <input
            type="text"
            name="Task_name"
            id="name"
            placeholder="enter Task name"
            autoComplete="off"
            value={task.Task_name}
            onChange={onChange}
          />
        </div>
        <div className="addTaskItem">
          <lable> Start Date </lable>
          <ReactDatePicker
            name="date"
            id="date"
            value={task.start_date}
            autoComplete="off"
            dateFormat="dd/MM/yyyy"
            selected={task.start_date}
            minDate={minDate}
            onChange={(date) => setTask({ ...task, start_date: date })}
            filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
            isClearable
            showYearDropdown
            scrollableYearDropdown
          />
        </div>
        <div className="addTaskItem">
          <lable> Duration </lable>
          <input
            type="text"
            name="duration"
            id="duration"
            placeholder="enter duration"
            autoComplete="off"
            value={task.duration}
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
            value={task.description}
            onChange={onChange}
          />
        </div>
        <div className="addProjectItem">
          <lable> Project </lable>
          <input
            type="number"
            name="project_id"
            id="project_id"
            placeholder="enter project"
            autoComplete="off"
            value={task.project_id}
            onChange={onChange}
          />
        </div>
        <div className="addProjectItem">
          <lable> User Undertaking </lable>
          <input
            type="number"
            name="user_id"
            id="user_id"
            placeholder="enter user undertaking"
            autoComplete="off"
            value={task.user_id}
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
};

export default NewTask;
