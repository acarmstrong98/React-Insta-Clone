import React from 'react';
import PropTypes from 'prop-types'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {

  const { username, thumbnailUrl, imageUrl, likes, comments } = props.post;
  
      return (
      <div>
        <div>
          <div>
            <img src={thumbnailUrl} alt={`{username}'s profile picture`}/>
          </div>
          <span>{username}</span>
        </div>
        <div>
          <img src={imageUrl} alt={`{username}'s post`}/>
        </div>



        <CommentSection comments={comments} likes={likes} userProfile={props.userProfile}/>
      </div>
    )
}

PostContainer.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  timestamp: PropTypes.string,

}

export default PostContainer








// import React from "react";
// import './PostContainer.css';
// import CommentSection from "../CommentSection/CommentSection";

// function PostContainer(props) {
//     return (

//       <section className="postContainer">

//         <div className="postUser">
//           <img src={props.dummyData.thumbnailUrl} className="thumbnail" alt="avatar"/>
//           <h3 className="username">{props.dummyData.username}</h3>
//         </div>

//         <div className="image">
//           <img src={props.dummyData.imageUrl} className="imageUrl" alt="post"/>
//         </div>

//         <div>



//         </div>

//         <CommentSection key={props.username} dummyData={props.dummyData} />
//       </section>

//     );
// }

// export default PostContainer; 