import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import './Post.css'

const Post = props => {
    return (
        <div className="post-box">
            <PostHeader
            username={props.post.username}
            thumbnailUrl={props.post.thumbnailUrl}
            />
            <div className="post-pic-box">
                <img 
                alt="post thumbnail" 
                className="post-image" 
                src={props.post.imageUrl} 

                />
            </div>
            <CommentSection comments={props.post.comments} />
        </div>
    );
};

export default Post;