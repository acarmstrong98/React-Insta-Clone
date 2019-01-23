import React from "react";
import Comment from "./Comment";
import PropTypes from 'prop-types'

class CommentSection extends React.Component {
  constructor() {
    super()
    this.state = {
      comments: [],
      currentComment: null,
    }
  }
  componentDidMount = () => {
    this.setState({
      comments: this.props.comments,
      currentComment: ''
    })
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }
  addComment = (event) => {
    event.preventDefault()
    const newCommentList = [...this.state.comments, {username: 'DEFAULT', text: this.state.currentComment}]
    this.setState({
      comments: newCommentList,
      currentComment: ''
    })
  }

  render() {
    return (
      <div>

        {this.state.comments.map(comment => {
          return <Comment username={comment.username} text={comment.text}/>
        })}


        <form>

          <input 
          type="text"
          name="currentComment"
          value={this.state.currentComment}
          onChange={this.handleChange}
          onSubmit={this.addComment}/>

          <button onClick={this.addComment}>Submit</button>

        </form>


      </div>

      )
  }

}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string,
    })
  )
}

export default CommentSection; 


// function addNewComment (comment, index) {

// }

// function CommentSection(props) {
//     return (

//       <div className="commentSection">

//           {props.dummyData.comments.map(commenters => {

//             return (

//               <Comment key={commenters.username} commentData={commenters}/>

//             );
//           })}

//           <form>
//             <input />
//           </form>
//       </div>

//     );
// }