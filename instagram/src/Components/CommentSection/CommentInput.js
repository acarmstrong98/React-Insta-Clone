import React from 'react';

const CommentInput = (props) => {
  console.log()
  return (
    <form onSubmit={props.onCommentAdd}>
      <CommentInputField type="text" onChange={props.handleNewComment} value={props.newComment} placeholder="Add a comment..."/>
    </form>
  )
}

export default CommentInput;