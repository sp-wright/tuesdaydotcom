import React from 'react';
import JobItem from './JobItem';

const JobOutput = (props) => {
  return (
    <section className="job-output-container">
      <section className="header-span job-item-titles">
        <div>
          <h5>Number</h5>
        </div>
        <div>
          <h5>Task</h5>
        </div>
        <div>
          <h5>Department</h5>
        </div>
        <div>
          <h5>Priority</h5>
        </div>
        <div>
          <h5>Comment</h5>
        </div>
      </section>
      {props.jobs.map((job, i) => (
        <JobItem job={job} id={job._id} number={i} key={job._id} deleteComment={(e) => props.deleteComment(e)} editItem={(e) => props.editItem(e)} deleteItem={(e) => props.deleteItem(e)} />
      ))}
    </section>
  );
};

export default JobOutput;
