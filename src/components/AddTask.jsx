import axios from "axios";
import { useState } from "react";

const AddTask = ({ tasks, getTasks }) => {
  const [newTask, setNewTask] = useState("");
  const [taskDate, setTaskDate] = useState("");
  console.log(tasks, getTasks);

  const addTask = async (obj) => {
    const BASE_URL = process.env.REACT_APP_API_URL;
    await axios.post(BASE_URL, obj);
    getTasks();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ task: newTask, date: taskDate, taskDone: false });
    setNewTask("");
    setTaskDate("");
  };

  return (
    <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="task" className="form-label lead fw-bolder">
          Add a Task
        </label>
        <input
          required
          type="text"
          className="form-control"
          id="task"
          aria-describedby="emailHelp"
          placeholder="Task"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="task-date" className="form-label lead fw-bolder">
          Appointment
        </label>
        <input
          required
          type="datetime-local"
          className="form-control"
          id="task-date"
          value={taskDate}
          onChange={(e) => {
            setTaskDate(e.target.value);
          }}
        />
      </div>

      <button type="submit" className="btn btn-danger text-light">
        Submit
      </button>
    </form>
  );
};

export default AddTask;
