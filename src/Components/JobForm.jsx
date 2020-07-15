import React, { useState } from 'react';

const JobForm = (props) => {
  const [formValid, setFormValid] = useState({
    taskValid: true,
    departmentValid: true,
    priorityValid: true,
  });
  const [job, setJob] = useState({
    task: '',
    department: '',
    priority: '',
  });

  const updateJob = (e) => {
    const { name, value, id } = e;
    setJob({
      ...job,
      [name === '' ? id : name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let task = true;
    let department = true;
    let priority = true;

    if (job.task === '') {
      task = false;
    }
    if (job.department === '') {
      department = false;
    }
    if (job.priority === '') {
      priority = false;
    }

    if (task === false || department === false || priority === false) {
      setFormValid({
        taskValid: task,
        departmentValid: department,
        priorityValid: priority,
      });
    } else {
      props.submit(job);
      setJob({ task: '', department: '', priority: '' });
      setFormValid({ taskValid: true, departmentValid: true, priorityValid: true });
    }
  };

  return (
    <div className="input-container">
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="form-grp">
          <label htmlFor="title">Task:</label>
          <input
            className={formValid.taskValid ? 'user-input' : 'user-input not-valid'}
            value={job.task}
            onChange={(e) => updateJob(e.target)}
            type="text"
            name="task"
            autoComplete="off"
            placeholder={formValid.taskValid ? 'Enter your task...' : 'You need to Enter a Task!'}
          />
        </div>
        <div className="form-grp">
          <label htmlFor="type">Department:</label>
          <select className={formValid.departmentValid ? null : 'not-valid'} value={job.department} onChange={(e) => updateJob(e.target)} id="department">
            <option value="none">Select an Option</option>
            <option value="ui/ux">UI/UX</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>
        </div>
        <div className="form-grp">
          <label htmlFor="type">Priority:</label>
          <select className={formValid.priorityValid ? null : 'not-valid'} value={job.priority} onChange={(e) => updateJob(e.target)} id="priority">
            <option value="none">Select an Option</option>
            <option value="normal">Normal</option>
            <option value="important">Important</option>
            <option value="asap">ASAP</option>
          </select>
        </div>
        <div className="form-grp">
          <button type="submit">Add Job</button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
