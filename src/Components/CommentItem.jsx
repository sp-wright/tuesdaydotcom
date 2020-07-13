import React from 'react';

const CommentItem = (props) => {
  return (
    <li className="comment-text">
      {props.info.commentText} <i id={props.id} onClick={(e) => props.deleteComment(e.target)} className="minus fas fa-lg fa-minus"></i>
    </li>
  );
};

export default CommentItem;
