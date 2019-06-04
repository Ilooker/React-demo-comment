import React from 'react';
import User from './user';
import Comment from './comment'
import './index.css';


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
    
    let commentDate1 =  new Date();
    commentDate1.setFullYear(2018,3,14);
    curComment.push(
      {
        userName : "Frederick Wade", 
        userRelationship : "HUSBAND", 
        userHeadPortrait : "../photos/1.jpg",
        commentText : "This article will show you how to take the negative influences in your life away and replace them with positives, so you will have increases in morale, and productivity. Focus on the positive for success and peak performance.",
        commentTime : commentDate1
      }
    );
    let commentDate2=new Date();
    commentDate2.setFullYear(2018,5,2);
    curComment.push(
      {
        userName : "Milton Gutierrez",
        userRelationship : "SISTER",
        userHeadPortrait : "../photos/2.jpg",
        commentText : "Focus on the positive for success and peak performance.",
        commentTime : commentDate2
      }
    );
    let commentDate3=new Date();
    commentDate3.setFullYear(2019,5,3);
    curComment.push(
      {
        userName : "Sean Oliver" ,
        userRelationship : "FATHER" ,
        userHeadPortrait : "../photos/3.jpg",
        commentText : " Focus on the positive for success and peak performance.",
        commentTime : commentDate3
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
    const curDate=new Date();
    //console.log(curDate);
    const curComments = this.state.comments;
    curComments.push(
      {
        userName : this.state.name,
        userRelationship : this.state.relationship === "" ? "ME" : this.state.relationship,
        userHeadPortrait : this.state.headPortrait,
        commentText : this.state.value,
        commentTime : curDate
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
        //alert(obj.commentTime);
        const curDate=new Date();
        var show_time=""
        // console.log(obj.commentTime.getTime());
        // console.log(curDate.getTime())
        // console.log((curDate.getTime()-obj.commentTime.getTime()));      
        if ( (curDate.getTime()-obj.commentTime.getTime()) <(1000*60*60*24) && (curDate.getDate()===obj.commentTime.getDate()) ){//today 
          let subTime=parseInt(curDate.getTime()/1000)-parseInt(obj.commentTime.getTime()/1000);
          let subHours=parseInt(subTime/3600);
          let subMinutes=parseInt((subTime-3600*subHours)/60);
          let subSeconds=parseInt((subTime-3600*subHours-60*subMinutes));
          if(subHours > 0){//different hour
            show_time = subHours + ( subHours >1 ? "Hours" : "Hour");
          }else{//same hour
            if(subMinutes>0){
              show_time = subMinutes + ( subMinutes > 1 ? "Minutes" : "Minute");
            }else{
              show_time = subSeconds + ( subSeconds > 1 ? "Seconds" : "Second");
            }
            
          }
          
        }else if( (curDate.getTime()-obj.commentTime.getTime()) < (2*1000*60*60*24) ){
          show_time = "YESTERDAY";
        }else{
          const commentDateYear=obj.commentTime.getFullYear();
          const commentDateMon=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'][obj.commentTime.getMonth()];
          const commentDateDay=obj.commentTime.getDate();
          show_time=commentDateMon+" "+commentDateDay+","+commentDateYear;
        }
        return (
          <Comment key={index} 
            userName={obj.userName}
            userRelationship={obj.userRelationship}
            userHeadPortrait={obj.userHeadPortrait}
            commentText={obj.commentText}
            commentTime={show_time}
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
        <div className="comment-wrap">
            {showComments}
        </div>
        <div className="comment-container add-new">
            <User name={this.state.name} relationship ={this.state.relationship} headPortrait={this.state.headPortrait} />
            <textarea className="comment-text" value={this.state.value} onChange={this.handleChange} />
            <input className="user-submit-comment" type="submit" value="Comment" onClick={this.handleSubmit} />
          
        </div>
      </div>
    );
  }
}

export default Page;