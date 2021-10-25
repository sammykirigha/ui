import React, { useState } from "react";
import "./layout.css";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createTask } from "../../redux/actions/task";

const TaskModal = ({ id, show, handleClose, user, handleShow }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    task_name: "",
    duration: "",
    start_date: "",
    description: "",
    user_id: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const addTask = () => {
    const task_to_add = { ...task, project_id: id, status: "ongoing" };
    dispatch(createTask(task_to_add));
    reseTask();
    handleClose();
  };

  const reseTask = () => {
    setTask({
      task_name: "",
      duration: "",
      start_date: "",
      description: "",
      user_id: "",
    });
  };

  const minDate = moment();

  return (
    <>
      <Modal
        show={show}
        onHide={() => {
          reseTask();
          handleClose();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Task </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="newTask">
            <form className="addTaskForm">
              <div className="addTaskItem">
                <lable>Task name </lable>
                <input
                  type="text"
                  name="task_name"
                  id="name"
                  placeholder="enter Task name"
                  autoComplete="off"
                  value={task.task_name}
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
                  filterDate={(date) =>
                    date.getDay() !== 6 && date.getDay() !== 0
                  }
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
                <lable> User </lable>
                <select value={task.user_id} onChange={onChange} name="user_id">
                  <option>Choose user to undertake Task</option>
                  <option value={user?.id}>
                    {user?.username} {user?.full_name}
                  </option>
                </select>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              reseTask();
              handleClose();
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={addTask}>
            Create task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskModal;
