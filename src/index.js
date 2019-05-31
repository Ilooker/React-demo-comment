import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class User extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name : props.name,
      relationship : props.relationship,
      headPortrait : props.headPortrait
    };
  }
  render(){
    return(
      <div className="user-container">
        <div className="user-info" >
          <p className="user-name">{this.state.name}</p>
          <p className="user-relationship">{this.state.relationship}</p>
        </div>
        <div className="user-img">
          <img className="user-img-info" src={this.state.headPortrait} alt="headPortrait" />
        </div>
      </div>
      
    );
  }
}


class Comment extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userName : props.userName,
      userRelationship : props.userRelationship,
      userHeadPortrait : props.userHeadPortrait,
      commentText : props.commentText,
      commentTime : props.commentTime
    };
  }
  render(){
    return(
      <div className="comment-container">
        <User className="" name={this.state.userName} relationship={this.state.userRelationship} headPortrait={this.state.userHeadPortrait}/>
        <textarea className="comment-text">{this.state.commentText}</textarea>
        <p>{this.state.commentTime}</p>
      </div>
    );
  }
}
class Page extends React.Component{
  constructor(props){
    super(props);
    this.state={
      comments: [],
      numberOfComment : 0,
      value : 'Place your comment here..',
      name : props.name,
      headPortrait: props.headPortrait,
      relationship: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    const curComment=[];
    curComment.push(
      {
        userName : "Frederick Wade", 
        userRelationship : "HUSBAND", 
        userHeadPortrait : "../photos/1.jpg",
        commentText : "This article will show you how to take the negative influences in your life away and replace them with positives, so you will have increases in morale, and productivity. Focus on the positive for success and peak performance.",
        commentTime : "MAY 31,2019"
      }
    );
    curComment.push(
      {
        userName:"Milton Gutierrez",
        userRelationship:"SISTER",
        userHeadPortrait:"../photos/2.jpg",
        commentText:"Focus on the positive for success and peak performance.",
        commentTime:"JUL 30,2018"
      }
    );
    curComment.push(
      {
        userName : "Sean Oliver" ,
        userRelationship : "FATHER" ,
        userHeadPortrait : "../photos/3.jpg",
        commentText : " Focus on the positive for success and peak performance.",
        commentTime : "JUL 24,2018",
      }
    );
    this.setState({
      comments : curComment,
      numberOfComment: 3,
    });
  }
  handleChange(event){
    this.setState(
      {value : event.target.value}
    );
  }
  handleSubmit(event){
    event.preventDefault();
    //alert(this.state.value);
    const date=new Date();
    const commentDateYear=date.getFullYear();
    const commentDateMon=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'][date.getMonth()];
    const commentDateDay=date.getDate();

    const curComments = this.state.comments;
    curComments.push(
      {
        userName : this.state.name,
        userRelationship : this.state.relationship==="" ? "ME" : this.state.relationship,
        userHeadPortrait : this.state.headPortrait,
        commentText : this.state.value,
        commentTime : commentDateMon+" "+commentDateDay+', '+commentDateYear,
      }
    );
    this.setState(
      (state) => (
        {
          numberOfComment : (state.numberOfComment + 1),
        })
    );
  }
  render(){
    const showComments=this.state.comments.map(
      (obj,index) => {
        return (
          <Comment key={index} 
            userName={obj.userName}
            userRelationship={obj.userRelationship}
            userHeadPortrait={obj.userHeadPortrait}
            commentText={obj.commentText}
            commentTime={obj.commentTime}
          />
        );
      }
    );
    return(
      <div className="fullpage">
        <div className="title">
          {this.state.numberOfComment} {this.state.numberOfComment > 1 ? 'Comments' : 'Comment'}
        </div>
        {/*** 
        <Comment 
          userName="Frederick Wade" 
          userRelationship="HUSBAND" 
          userHeadPortrait="../photos/1.jpg"
          commentText="This article will show you how to take the negative influences in your life away and replace them with positives, so you will have increases in morale, and productivity. Focus on the positive for success and peak performance."
          commentTime="MAY 31,2019"
        />
        <Comment 
          userName="Milton Gutierrez" 
          userRelationship="SISTER" 
          userHeadPortrait="../photos/2.jpg"
          commentText="Focus on the positive for success and peak performance."
          commentTime="JUL 30,2018"
        />
        <Comment 
          userName="Sean Oliver" 
          userRelationship="FATHER" 
          userHeadPortrait="../photos/3.jpg"
          commentText=" Focus on the positive for success and peak performance."
          commentTime="JUL 24,2018"
        />*/}
        {showComments}
        <div className="comment-container">
          
          <form className="comment-form" onSubmit={this.handleSubmit}>
            <User name={this.state.name} relationship ={this.state.relationship} headPortrait={this.state.headPortrait} />
            <textarea className="comment-text" value={this.state.value} onChange={this.handleChange}/>
            <input className="user-submit-comment" type="submit" value="Comment" />
          </form>
        </div>
      </div>
    );
  }
}
ReactDOM.render(
  <Page name="Joanne Sanders" relationship ="ME" headPortrait="../photos/2.jpg" />,
  document.getElementById('root')
);