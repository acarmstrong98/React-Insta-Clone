import React from "react";
import './PostContainer.css';
import CommentSection from "./CommentSection.js";

function PostContainer(props) {
    return (

      <section className="postContainer">

        <div className="postUser">
          <img src={props.dummyData.thumbnailUrl} className="thumbnail" alt="avatar"/>
          <h3 className="username">{props.dummyData.username}</h3>
        </div>

        <div className="image">
          <img src={props.dummyData.imageUrl} className="imageUrl" alt="post"/>
        </div>

        <div>
          


        </div>

        <CommentSection key={props.username} dummyData={props.dummyData} />
      </section>

    );
}

export default PostContainer;