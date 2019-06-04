import React from 'react';

import './index.css';
import User from './user'

class Comment extends React.Component{
    render(){
        return(
        <div className="comment-container">
            <User className="" name={this.props.userName} relationship={this.props.userRelationship} headPortrait={this.props.userHeadPortrait}/>
            <textarea className="comment-text" defaultValue={this.props.commentText}></textarea>
            <p>{this.props.commentTime}</p>
        </div>
        );
    }
}
export default Comment;
