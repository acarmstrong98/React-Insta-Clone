import React from 'react';
// import PropTypes from 'prop-types';

const Comment = props => {

    return (

        <div className='comment'>
            <p>{props.commentData.username} {props.commentData.text}</p>
        </div>

    );
};

// Comment.propTypes = {

//     Comment : propTypes.shape ({
//         username: PropTypes.string,
//         text: PropTypes.string

//     })
// }

export default Comment;