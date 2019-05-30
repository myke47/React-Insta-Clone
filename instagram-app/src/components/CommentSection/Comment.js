import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
    return (
        <div className="comment-text">
            <div className="comment">{props.comment.text}
            </div>
            <div className="username">{props.comment.username}</div>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes/String,
        username: PropTypes.string
    })
};

export default Comment;
