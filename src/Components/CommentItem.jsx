import React from 'react';

const CommentItem = (props) => {
  return (
    <div className="comment-text">
      <p>{props.info.commentText} </p>
      <i id={props.id} onClick={(e) => props.deleteComment(e.target)} className="minus fas fa-lg fa-minus"></i>
    </div>
  );
};

export default CommentItem;
