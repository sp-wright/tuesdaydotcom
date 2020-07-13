import React, { useState } from 'react';

const JobForm = (props) => {
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
    if (job.task === '' || job.department === '' || job.department === 'none' || job.priority === '' || job.priority === 'none') {
      alert('fill out the form');
    } else {
      props.submit(job);
      setJob({ task: '', department: '', priority: '' });
    }
  };

  return (
    <div className="input-container">
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="form-grp">
          <label htmlFor="title">Task:</label>
          <input className="user-input" value={job.task} onChange={(e) => updateJob(e.target)} type="text" name="task" autoComplete="off" placeholder="Enter your task..." />
        </div>
        <div className="form-grp">
          <label htmlFor="type">Department:</label>
          <select value={job.department} onChange={(e) => updateJob(e.target)} id="department">
            <option value="none">Select an Option</option>
            <option value="ui/ux">UI/UX</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>
        </div>
        <div className="form-grp">
          <label htmlFor="type">Priority:</label>
          <select value={job.priority} onChange={(e) => updateJob(e.target)} id="priority">
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
