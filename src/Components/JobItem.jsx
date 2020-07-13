import React, { useState } from 'react';
import CommentItem from './CommentItem';

const JobItem = (props) => {
  const [addComment, setAddComment] = useState('');
  const { task, department, priority, comment, _id } = props.job;

  const addCommentHandler = (e) => {
    e.preventDefault();
    const editJob = {
      id: props.id,
      comment: addComment,
    };

    props.editItem(editJob);
    setAddComment('');
  };

  return (
    <section className="job-item-container">
      <div>
        <i onClick={() => props.deleteItem(props.id)} className="trash far fa-lg fa-trash-alt"></i>
        <p>{props.number + 1}</p>
      </div>
      <div>
        <p>{task}</p>
      </div>
      <div>
        <p>{department}</p>
      </div>
      <div className={priority}>
        <p>{priority}</p>
      </div>
      <div>
        <form onSubmit={(e) => addCommentHandler(e)} className="add-comment-form">
          <textarea value={addComment} onChange={(e) => setAddComment(e.target.value)} placeholder="add a comment..."></textarea>
          <button type="submit">
            <i className="add fas fa-2x fa-plus"></i>
          </button>
        </form>
        <section>
          <ul className="comment-list-container">
            {comment.map((c) => (
              <CommentItem deleteComment={(e) => props.deleteComment({ commentId: e.id, jobId: _id })} info={c} key={c._id} id={c._id} />
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default JobItem;
