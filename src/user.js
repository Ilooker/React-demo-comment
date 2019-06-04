import React from 'react';
import './index.css';


class User extends React.Component{
    // static propTypes = {
    //     name: PropTypes.string,
    //     name: PropTypes.string,
    //     name: PropTypes.string,
    // }
  render(){
    return(
      <div className="user-container">
        <div className="user-info" >
          <p className="user-name">{this.props.name}</p>
          <p className="user-relationship">{this.props.relationship}</p>
        </div>
        <div className="user-img">
          <img className="user-img-info" src={this.props.headPortrait} alt="headPortrait" />
        </div>
      </div>
      
    );
  }
}
export default User;