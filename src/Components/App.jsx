import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import JobForm from './JobForm';
import JobOutput from './JobOutput';
import '../style.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const getJobs = async () => {
      await axios(`https://intense-brook-14672.herokuapp.com/jobs`).then((res) => {
        setJobs(res.data);
      });
    };
    getJobs();
  }, [refresh]);

  const submitJob = (e) => {
    const { task, department, priority } = e;
    const jobItem = {
      task: task,
      department: department,
      priority: priority,
    };

    const postJob = async () => {
      axios
        .post(`https://intense-brook-14672.herokuapp.com/jobs`, jobItem)
        .then(() => {
          setRefresh(!refresh);
        })
        .catch((error) => console.log(error));
    };
    postJob();
  };

  const deleteItem = (id) => {
    const deleteJob = async () => {
      await axios.delete(`https://intense-brook-14672.herokuapp.com/jobs/${id}`).then(() => setRefresh(!refresh));
    };
    deleteJob();
  };

  const deleteComment = (e) => {
    const { commentId, jobId } = e;

    const deleteComment = async () => {
      await axios.delete(`https://intense-brook-14672.herokuapp.com/jobs/${jobId}/${commentId}`).then(() => setRefresh(!refresh));
    };
    deleteComment();
  };

  const editItem = (e) => {
    const { id, comment } = e;

    const patchJob = async () => {
      await axios.patch(`https://intense-brook-14672.herokuapp.com/jobs/${id}`, { comment: comment }).then(() => setRefresh(!refresh));
    };
    patchJob();
  };

  return (
    <div>
      <Header />
      <JobForm submit={(e) => submitJob(e)} />
      <JobOutput jobs={jobs} editItem={(e) => editItem(e)} deleteItem={(e) => deleteItem(e)} deleteComment={(e) => deleteComment(e)} />
    </div>
  );
}

export default App;
